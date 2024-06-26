interface ParameterTypeBase {
    widget_type: string;
    name: string;
    label: string;
    description: string;
}

interface SelectParameterType extends ParameterTypeBase {
    options: {
        id: string;
        label: string;
    }[];
    trigger_refresh: boolean;
}

export interface SingleSelectParameterType extends SelectParameterType {
    selected_id: string;
}

export interface MultiSelectParameterType extends SelectParameterType {
    show_select_all: boolean;
    is_dropdown: boolean;
    order_matters: boolean;
    selected_ids: string[];
}

export interface DateParameterType extends ParameterTypeBase {
    selected_date: string;
}

export interface DateRangeParameterType extends ParameterTypeBase {
    selected_start_date: string;
    selected_end_date: string;
}

interface NumberParameterTypeBase extends ParameterTypeBase {
    min_value: string;
    max_value: string;
    increment: string;
}

export interface NumberParameterType extends NumberParameterTypeBase {
    selected_value: string;
}

export interface NumberRangeParameterType extends NumberParameterTypeBase {
    selected_lower_value: string;
    selected_upper_value: string;
}

export interface TextParameterType extends ParameterTypeBase {
    entered_text: string;
    is_textarea: boolean;
}

export type ParameterType = 
      SingleSelectParameterType 
    | MultiSelectParameterType 
    | DateParameterType 
    | DateRangeParameterType 
    | NumberParameterType 
    | NumberRangeParameterType
    | TextParameterType

export interface ParamDataType {
    parameters: ParameterType[];
}
