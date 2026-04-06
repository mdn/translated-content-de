---
title: PreferenceManager
slug: Web/API/PreferenceManager
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

{{APIRef("User Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`PreferenceManager`**-Interface der [User Preferences API](/de/docs/Web/API/User_Preferences_API) ermöglicht den Zugriff auf [`PreferenceObject`](/de/docs/Web/API/PreferenceObject)-Objekte, die verwendet werden, um Benutzerpräferenzen abzufragen und zu ändern.

Das `PreferenceManager` für das aktuelle Dokument kann über die [`Navigator.preferences`](/de/docs/Web/API/Navigator/preferences)-Eigenschaft aufgerufen werden.

Das `PreferenceManager`-Interface erbt von [`EventTarget`](/de/docs/Web/API/EventTarget).

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`PreferenceManager.colorScheme`](/de/docs/Web/API/PreferenceManager/colorScheme) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Benutzerpräferenz für das [Farbschema](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) der Website zu überschreiben.
- [`PreferenceManager.contrast`](/de/docs/Web/API/PreferenceManager/contrast) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Benutzerpräferenz für den [Kontrast](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) der Website zu überschreiben.
- [`PreferenceManager.reducedMotion`](/de/docs/Web/API/PreferenceManager/reducedMotion) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Benutzerpräferenz für die [reduzierte Bewegung](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) der Website zu überschreiben.
- [`PreferenceManager.reducedTransparency`](/de/docs/Web/API/PreferenceManager/reducedTransparency) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Benutzerpräferenz für die [reduzierte Transparenz](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) der Website zu überschreiben.
- [`PreferenceManager.reducedData`](/de/docs/Web/API/PreferenceManager/reducedData) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Benutzerpräferenz für die [reduzierte Datenmenge](/de/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-data) der Website zu überschreiben.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie die bevorzugte Farbschema-Einstellung des Benutzers abgefragt werden kann.

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
