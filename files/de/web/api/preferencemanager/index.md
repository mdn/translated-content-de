---
title: PreferenceManager
slug: Web/API/PreferenceManager
l10n:
  sourceCommit: 5e815d522e796fb2209fa8470616b37e31c572b4
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`PreferenceManager`**-Interface der [User Preferences API](/de/docs/Web/API/User_Preferences_API) bietet Zugriff auf [`PreferenceObject`](/de/docs/Web/API/PreferenceObject)-Objekte, die verwendet werden, um Benutzereinstellungen abzufragen und zu ändern.

Der `PreferenceManager` für das aktuelle Dokument kann über die [`Navigator.preferences`](/de/docs/Web/API/Navigator/preferences)-Eigenschaft zugegriffen werden.

Das `PreferenceManager`-Interface erbt von [`EventTarget`](/de/docs/Web/API/EventTarget).

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`PreferenceManager.colorScheme`](/de/docs/Web/API/PreferenceManager/colorScheme) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Benutzervorgabe für das [Farbschema](/de/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-color-scheme) der Website zu überschreiben.
- [`PreferenceManager.contrast`](/de/docs/Web/API/PreferenceManager/contrast) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Benutzervorgabe für den [Kontrast](/de/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-contrast) der Website zu überschreiben.
- [`PreferenceManager.reducedMotion`](/de/docs/Web/API/PreferenceManager/reducedMotion) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Benutzervorgabe für die [reduzierte Bewegung](/de/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-reduced-motion) der Website zu überschreiben.
- [`PreferenceManager.reducedTransparency`](/de/docs/Web/API/PreferenceManager/reducedTransparency) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Benutzervorgabe für die [reduzierte Transparenz](/de/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-reduced-transparency) der Website zu überschreiben.
- [`PreferenceManager.reducedData`](/de/docs/Web/API/PreferenceManager/reducedData) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Benutzervorgabe für die [reduzierten Daten](/de/docs/Web/CSS/Reference/Reference/At-rules/@media/prefers-reduced-data) der Website zu überschreiben.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel zeigt, wie die bevorzugte Farbschemaeinstellung des Benutzers abgefragt wird.

```js
if (navigator.preferences.colorScheme.value === "dark") {
  // The user prefers a dark color scheme.
} else {
  // The user prefers a light color scheme.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
