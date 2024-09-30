---
title: "XRSession: inputSources-Eigenschaft"
short-title: inputSources
slug: Web/API/XRSession/inputSources
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`inputSources`**-Eigenschaft der [`XRSession`](/de/docs/Web/API/XRSession)-Schnittstelle gibt ein [`XRInputSourceArray`](/de/docs/Web/API/XRInputSourceArray)-Objekt zurück, das alle Controller und Eingabegeräte aufführt, die ausdrücklich mit dem XR-Gerät verbunden und derzeit verfügbar sind. Diese Controller können Handcontroller, XR-ausgestattete Handschuhe, optisch verfolgte Hände und blickbasierte Eingabemethoden umfassen. Tastaturen, Gamepads und Mäuse werden _nicht_ als WebXR-Eingabequellen betrachtet.

> [!NOTE]
> Traditionelle Gamepad-Controller werden über die [Gamepad-API](/de/docs/Web/API/Gamepad_API) unterstützt.

## Wert

Ein [`XRInputSourceArray`](/de/docs/Web/API/XRInputSourceArray)-Objekt, das alle aktuell verbundenen Eingabegeräte auflistet, die speziell mit dem derzeit verwendeten XR-Gerät verknüpft sind. Das zurückgegebene Objekt ist **live**; wenn Geräte mit dem System des Benutzers verbunden oder davon entfernt werden, aktualisiert sich der Inhalt der Liste entsprechend.

## Verwendungshinweise

Sie können einen Handler für das `XRSession`-Ereignis [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event) hinzufügen, um benachrichtigt zu werden, wenn sich der Inhalt der Liste der verbundenen Geräte der Sitzung ändert. Sie können dann entweder den Wert von `inputSources` abrufen, um die Liste zu überprüfen, oder sich auf eine Referenz der Liste beziehen, die Sie zuvor gespeichert haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRInputSource`](/de/docs/Web/API/XRInputSource)
- Das [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event)-Ereignis
- [Gamepad-API](/de/docs/Web/API/Gamepad_API)
