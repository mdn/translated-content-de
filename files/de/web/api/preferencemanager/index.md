---
title: PreferenceManager
slug: Web/API/PreferenceManager
l10n:
  sourceCommit: ac0fef0566bfd672c44644a95240b8e1407277bd
---

{{APIRef("Preferences API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das **`PreferenceManager`**-Interface der [User Preferences API](/de/docs/Web/API/User_Preferences_API) bietet Zugriff auf [`PreferenceObject`](/de/docs/Web/API/PreferenceObject)-Objekte, die verwendet werden, um Benutzerpräferenzen abzufragen und zu ändern.

Der `PreferenceManager` für das aktuelle Dokument kann über die [`Navigator.preferences`](/de/docs/Web/API/Navigator/preferences)-Eigenschaft aufgerufen werden.

Das `PreferenceManager`-Interface erbt von [`EventTarget`](/de/docs/Web/API/EventTarget).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`PreferenceManager.colorScheme`](/de/docs/Web/API/PreferenceManager/colorScheme) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Benutzerpräferenz für das {{cssxref("@media/prefers-color-scheme", "Farbschema")}} der Website zu überschreiben.
- [`PreferenceManager.contrast`](/de/docs/Web/API/PreferenceManager/contrast) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Benutzerpräferenz für den {{cssxref("@media/prefers-contrast", "Kontrast")}} der Website zu überschreiben.
- [`PreferenceManager.reducedMotion`](/de/docs/Web/API/PreferenceManager/reducedMotion) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Benutzerpräferenz für die {{cssxref("@media/prefers-reduced-motion", "reduzierte Bewegung")}} der Website zu überschreiben.
- [`PreferenceManager.reducedTransparency`](/de/docs/Web/API/PreferenceManager/reducedTransparency) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Benutzerpräferenz für die {{cssxref("@media/prefers-reduced-transparency", "reduzierte Transparenz")}} der Website zu überschreiben.
- [`PreferenceManager.reducedData`](/de/docs/Web/API/PreferenceManager/reducedData) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein [`PreferenceObject`](/de/docs/Web/API/PreferenceObject), das verwendet wird, um die Benutzerpräferenz für die {{cssxref("@media/prefers-reduced-data", "reduzierten Daten")}} der Website zu überschreiben.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel demonstriert, wie die bevorzugte Farbschema-Präferenz des Benutzers abgefragt wird.

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
