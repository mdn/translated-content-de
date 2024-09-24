---
title: "XRInputSource: profiles-Eigenschaft"
short-title: Profile
slug: Web/API/XRInputSource/profiles
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte {{domxref("XRInputSource")}} Eigenschaft **`profiles`** gibt ein Array von Zeichenfolgen zurück, die jeweils ein Konfigurationsprofil für die Eingabequelle beschreiben. Die Profilzeichenfolgen sind in der Reihenfolge der Spezifität aufgelistet, wobei das spezifischste Profil zuerst aufgeführt wird.

> [!NOTE]
> Die `profiles`-Liste ist immer leer, wenn die WebXR-Sitzung im Inline-Modus ist.

## Wert

Ein Array von Zeichenfolgen, die jeweils ein Konfigurationsprofil für das durch das `XRInputSource`-Objekt dargestellte Eingabegerät beschreiben. Jedes Eingabeprofil gibt die bevorzugte visuelle Darstellung und das Verhalten der Eingabequelle an.

### Namen der Eingabeprofile

Ein Eingabeprofilname ist eine Zeichenfolge, die eine visuelle Darstellung und das Verhalten beschreibt, die die Eingabequelle möglicherweise verwendet. Jede Zeichenfolge:

- Hat keine Leerzeichen; stattdessen werden Wörter durch Bindestriche ("-") getrennt
- Falls verfügbar, können die USB-Hersteller- und Produkt-ID bereitgestellt werden, jedoch kann nicht darauf vertraut werden
- Identifiziert nicht eindeutig ein bestimmtes Gerät; vielmehr identifiziert es eine Konfiguration, die das Produkt nutzen kann
- Bietet keine Informationen über die Händigkeit des Geräts, falls zutreffend

Das [WebXR Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles/tree/main/packages/registry) wird von Geräteentwicklern und Browserentwicklern verwendet, um sicherzustellen, dass ein bestimmtes Gerät die gleichen Profilzeichenfolgen meldet, unabhängig davon, welchen Browser oder anderen {{Glossary("user agent")}} Sie verwenden.

### Generische Namen von Eingabeprofilen

Die folgenden Eingabeprofilnamen sind generisch und können als Rückfallebenen dienen, die die Geräte auf grobe Weise beschreiben.

- generic-button
- generic-hand-select-grasp
- generic-hand-select
- generic-hand
- generic-touchpad
- generic-touchscreen
- generic-trigger-squeeze-thumbstick
- generic-trigger-squeeze-touchpad-thumbstick
- generic-trigger-squeeze-touchpad
- generic-trigger-squeeze
- generic-trigger-thumbstick
- generic-trigger-touchpad-thumbstick
- generic-trigger-touchpad
- generic-trigger

## Beispiele

Die Liste in `profiles` ist in umgekehrter Spezifität geordnet; das heißt, die präziseste Beschreibung steht an erster Stelle, und die am wenigsten präzise Beschreibung steht an letzter Stelle. Der erste Eintrag in der Liste weist typischerweise auf das genaue Modell des Controllers hin oder auf ein kompatibles Modell.

Ein Beispiel: Eintrag 0 in `profiles` für einen Oculus Touch Controller ist `oculus-touch`. Der nächste Eintrag ist `generic-trigger-squeeze-thumbstick`, was auf ein generisches Gerät mit einem Abzug, einer Squeeze-Steuerung und einem Daumenstick hinweist. Obwohl der Oculus Touch Controller tatsächlich ein Daumenpad anstelle eines Daumensticks hat, ist die Gesamtdarstellung "ausreichend genau", sodass die Details innerhalb des zugehörigen Profils es dem Controller ermöglichen, nützlich interpretiert zu werden.

```js
inputSource.profiles;
// ['oculus-touch', 'generic-trigger-squeeze-thumbstick']
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Eingaben und Eingabequellen](/de/docs/Web/API/WebXR_Device_API/Inputs)
