---
title: "XRInputSource: profiles-Eigenschaft"
short-title: profiles
slug: Web/API/XRInputSource/profiles
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte [`XRInputSource`](/de/docs/Web/API/XRInputSource)-Eigenschaft **`profiles`** gibt ein Array von Zeichenfolgen zurück, die jeweils ein Konfigurationsprofil für die Eingabequelle beschreiben. Die Profilzeichenfolgen sind in der Reihenfolge der Spezifität aufgelistet, wobei das spezifischste Profil zuerst aufgeführt ist.

> [!NOTE]
> Die `profiles`-Liste ist immer leer, wenn die WebXR-Sitzung im Inline-Modus ist.

## Wert

Ein Array von Zeichenfolgen, die jeweils ein Konfigurationsprofil für das durch das `XRInputSource`-Objekt repräsentierte Eingabegerät beschreiben. Jedes Eingabeprofil spezifiziert die bevorzugte visuelle Darstellung und das Verhalten der Eingabequelle.

### Eingabeprofilnamen

Ein Eingabeprofilname ist eine Zeichenfolge, die eine visuelle Darstellung und das Verhalten beschreibt, die die Eingabequelle verwenden könnte. Jede Zeichenfolge:

- Hat keine Leerzeichen; stattdessen sind Wörter durch Bindestrich ("-") Zeichen getrennt
- Falls die Plattform es verfügbar macht, können die USB-Vendor- und Produkt-IDs bereitgestellt werden, können jedoch nicht darauf vertraut werden
- Identifiziert kein spezifisches Gerät eindeutig; vielmehr identifiziert es eine Konfiguration, die das Produkt verwenden kann
- Liefert keine Informationen über die Händigkeit des Geräts, falls zutreffend

Das [WebXR Input Profiles Registry](https://github.com/immersive-web/webxr-input-profiles/tree/main/packages/registry) wird von Geräteentwicklern und Browser-Entwicklern verwendet, um zu versuchen sicherzustellen, dass ein bestimmtes Gerät, unabhängig davon, welcher Browser oder welcher [Benutzeragent](/de/docs/Glossary/user_agent) verwendet wird, dieselben Profilzeichenfolgen meldet.

### Generische Eingabeprofilnamen

Die folgenden Eingabeprofilnamen sind generisch und können als Ersatz dienen, die die Geräte in groben Zügen beschreiben.

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

Die Liste in `profiles` ist in absteigender Spezifität geordnet; das heißt, die genaueste Beschreibung steht zuerst und die am wenigsten präzise Beschreibung zuletzt. Der erste Eintrag in der Liste ist typischerweise indikativ für das genaue Modell des Controllers oder eines Modells, mit dem der Controller kompatibel ist.

Beispielsweise ist Eintrag 0 in `profiles` für einen Oculus Touch Controller `oculus-touch`. Der nächste Eintrag ist `generic-trigger-squeeze-thumbstick`, was ein generisches Gerät mit einem Abzug, einer Drücksteuerung und einem Thumbstick darstellt. Obwohl der Oculus Touch Controller tatsächlich ein Thumbpad anstelle eines Thumbsticks hat, ist die Gesamtbeschreibung "nahe genug", dass die Details innerhalb des Profils, das den Namen übereinstimmt, dem Controller eine nützliche Interpretation ermöglichen.

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
