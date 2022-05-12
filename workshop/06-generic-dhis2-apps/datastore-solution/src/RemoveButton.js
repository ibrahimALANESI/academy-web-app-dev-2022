import { useOnlineStatus } from "@dhis2/app-runtime";
import { useSavedObject } from "@dhis2/app-service-datastore";
import { Button } from "@dhis2/ui";
import { removeButton } from "./App.module.css";

const RemoveButton = ({ id }) => {
  const [, { remove }] = useSavedObject(id);
  const { offline } = useOnlineStatus();
  return (
    <span className={removeButton}>
      <Button disabled={offline} dense destructive onClick={() => remove(id)}>
        -
      </Button>
    </span>
  );
};

export default RemoveButton;
