---
title: "XRSession: inputSources-Eigenschaft"
short-title: inputSources
slug: Web/API/XRSession/inputSources
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`inputSources`**-Eigenschaft des [`XRSession`](/de/docs/Web/API/XRSession)-Interfaces gibt ein [`XRInputSourceArray`](/de/docs/Web/API/XRInputSourceArray)-Objekt zurück, das alle Steuergeräte und Eingabegeräte auflistet, die ausdrücklich mit dem XR-Gerät verbunden sind und derzeit verfügbar sind. Diese Steuergeräte können Handheld-Controller, mit XR ausgestattete Handschuhe, optisch verfolgte Hände und blickbasierte Eingabemethoden umfassen. Tastaturen, Gamepads und Mäuse werden _nicht_ als WebXR-Eingabequellen betrachtet.

> [!NOTE]
> Traditionelle Gamepad-Controller werden über die [Gamepad API](/de/docs/Web/API/Gamepad_API) unterstützt.

## Wert

Ein [`XRInputSourceArray`](/de/docs/Web/API/XRInputSourceArray)-Objekt, das alle aktuell verknüpften Eingabegeräte auflistet, die spezifisch mit dem momentan in Gebrauch befindlichen XR-Gerät verbunden sind. Das zurückgegebene Objekt ist **live**; sobald Geräte mit dem System des Benutzers verbunden oder entfernt werden, aktualisieren sich die Inhalte der Liste, um die Änderungen widerzuspiegeln.

## Hinweise zur Nutzung

Sie können einen Handler für das `XRSession`-Ereignis [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event) hinzufügen, um benachrichtigt zu werden, wenn sich der Inhalt der Liste der verbundenen Geräte der Sitzung ändert. Sie können dann entweder den Wert von `inputSources` abrufen, um die Liste zu überprüfen, oder auf eine zuvor gespeicherte Referenz der Liste verweisen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRInputSource`](/de/docs/Web/API/XRInputSource)
- Das [`inputsourceschange`](/de/docs/Web/API/XRSession/inputsourceschange_event)-Ereignis
- [Gamepad API](/de/docs/Web/API/Gamepad_API)
