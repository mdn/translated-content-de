---
title: "XRInputSource: profiles-Eigenschaft"
short-title: profiles
slug: Web/API/XRInputSource/profiles
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRInputSource`](/de/docs/Web/API/XRInputSource) Eigenschaft **`profiles`** gibt ein Array von Zeichenfolgen zurück, die jeweils ein Konfigurationsprofil für die Eingabequelle beschreiben. Die Profilzeichenfolgen sind in der Reihenfolge der Spezifität aufgelistet, wobei das spezifischste Profil zuerst aufgeführt wird.

> [!NOTE]
> Die `profiles`-Liste ist immer leer, wenn sich die WebXR
> Sitzung im Inline-Modus befindet.

## Wert

Ein Array von Zeichenfolgen, die jeweils ein Konfigurationsprofil für das durch das `XRInputSource` Objekt dargestellte Eingabegerät beschreiben. Jedes Eingabeprofil spezifiziert die bevorzugte visuelle Darstellung und das Verhalten der Eingabequelle.

### Eingabeprofilnamen

Ein Eingabeprofilname ist eine Zeichenfolge, die eine visuelle Darstellung und ein Verhalten beschreibt, das die Eingabequelle möglicherweise verwenden kann. Jede Zeichenfolge:

- Enthält keine Leerzeichen; stattdessen werden Wörter durch Bindestriche ("-") getrennt
- Wenn die Plattform es ermöglicht, können die USB-Vendor- und Produkt-ID bereitgestellt werden, jedoch ohne Gewähr auf Verlässlichkeit
- Identifiziert nicht eindeutig ein spezifisches Gerät, sondern identifiziert eine Konfiguration, die das Produkt nutzen kann
- Liefert keine Informationen über die Händigkeit des Geräts, falls zutreffend

Das [WebXR Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles/tree/main/packages/registry) wird von Geräteentwicklern und Browser-Entwicklern genutzt, um zu gewährleisten, dass ein bestimmtes Gerät unabhängig vom verwendeten Browser oder anderen [User-Agenten](/de/docs/Glossary/user_agent) dieselben Profilzeichenfolgen meldet.

### Generische Eingabeprofilnamen

Die folgenden Eingabeprofilnamen sind generisch und können als Fallback dienen, die die Geräte im weitesten Sinne beschreiben.

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

Die Liste in `profiles` ist in umgekehrter Spezifität geordnet; das heißt, die genaueste Beschreibung steht an erster Stelle und die am wenigsten genaue am Ende. Der erste Eintrag in der Liste gibt typischerweise das genaue Modell des Controllers oder ein mit dem Controller kompatibles Modell an.

Zum Beispiel ist Eintrag 0 in `profiles` für einen Oculus Touch Controller `oculus-touch`. Der nächste Eintrag ist `generic-trigger-squeeze-thumbstick`, was ein generisches Gerät mit einem Trigger, einer Quetschsteuerung und einem Thumbstick anzeigt. Obwohl der Oculus Touch Controller tatsächlich ein Thumbpad anstelle eines Thumbsticks hat, ist die Gesamtbeschreibung "nah genug", sodass die Details innerhalb des Profils, das zu dem Namen passt, die sinnvolle Interpretation des Controllers ermöglichen.

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
