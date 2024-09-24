---
title: "USBConfiguration: configurationName-Eigenschaft"
short-title: configurationName
slug: Web/API/USBConfiguration/configurationName
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{securecontext_header}}{{APIRef("WebUSB API")}}{{SeeCompatTable}}

Die schreibgeschützte Eigenschaft **`configurationName`** des {{domxref("USBConfiguration")}}-Interfaces gibt den vom Gerät bereitgestellten Namen zurück, der diese Konfiguration beschreibt. Dieser entspricht dem Wert des String-Descriptors mit dem Index, der im [`iConfiguration`](https://www.beyondlogic.org/usbnutshell/usb5.shtml#ConfigurationDescriptors)-Feld des Konfigurationsdeskriptors angegeben ist, der diese Konfiguration definiert.

## Wert

Der vom Gerät bereitgestellte Name zur Beschreibung dieser Konfiguration.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
