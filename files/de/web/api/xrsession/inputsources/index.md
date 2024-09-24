---
title: "XRSession: inputSources-Eigenschaft"
short-title: inputSources
slug: Web/API/XRSession/inputSources
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`inputSources`**-Eigenschaft der
{{DOMxRef("XRSession")}}-Schnittstelle gibt ein {{domxref("XRInputSourceArray")}}-Objekt
zurück, das alle Controller und Eingabegeräte auflistet, die ausdrücklich mit dem
XR-Gerät verbunden und derzeit verfügbar sind. Diese Controller können Handheld-Controller,
XR-ausgerüstete Handschuhe, optisch verfolgte Hände und blickbasierte Eingabemethoden
umfassen. Tastaturen, Gamepads und Mäuse werden _nicht_ als WebXR-Eingabequellen betrachtet.

> [!NOTE]
> Traditionelle Gamepad-Controller werden mit der [Gamepad API](/de/docs/Web/API/Gamepad_API) unterstützt.

## Wert

Ein {{domxref("XRInputSourceArray")}}-Objekt, das alle derzeit verbundenen
Eingabegeräte auflistet, die speziell mit dem aktuell verwendeten XR-Gerät verbunden sind. Das
zurückgegebene Objekt ist **live**; wenn Geräte mit dem System des Benutzers verbunden oder davon entfernt werden,
aktualisiert sich der Inhalt der Liste, um die Änderungen widerzuspiegeln.

## Anwendungshinweise

Sie können einen Handler für das `XRSession`-Ereignis
{{domxref("XRSession.inputsourceschange_event", "inputsourceschange")}} hinzufügen, um benachrichtigt zu werden,
wenn sich der Inhalt der Liste der angeschlossenen Geräte der Sitzung ändert. Sie können dann entweder
den Wert von `inputSources` abrufen, um die Liste zu prüfen, oder auf eine
Referenz der zuvor gespeicherten Liste verweisen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("XRInputSource")}}
- Das {{DOMxRef("XRSession.inputsourceschange_event", "inputsourceschange")}}-Ereignis
- [Gamepad API](/de/docs/Web/API/Gamepad_API)
