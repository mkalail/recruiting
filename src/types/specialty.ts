export type Specialty = 
  | 'SAP FI'
  | 'SAP CO'
  | 'SAP SD'
  | 'SAP MM'
  | 'Oracle EBS'
  | 'Oracle Cloud'
  | 'Salesforce'
  | 'Workday'
  | 'ServiceNow'
  | 'Other';

export interface SpecialtyOption {
  value: Specialty;
  label: string;
}

export const specialtyOptions: SpecialtyOption[] = [
  { value: 'SAP FI', label: 'SAP Finance (FI)' },
  { value: 'SAP CO', label: 'SAP Controlling (CO)' },
  { value: 'SAP SD', label: 'SAP Sales & Distribution (SD)' },
  { value: 'SAP MM', label: 'SAP Materials Management (MM)' },
  { value: 'Oracle EBS', label: 'Oracle E-Business Suite' },
  { value: 'Oracle Cloud', label: 'Oracle Cloud Applications' },
  { value: 'Salesforce', label: 'Salesforce' },
  { value: 'Workday', label: 'Workday' },
  { value: 'ServiceNow', label: 'ServiceNow' },
  { value: 'Other', label: 'Other' }
];