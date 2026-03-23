---
title: User Preferences API
slug: Web/API/User_Preferences_API
l10n:
  sourceCommit: aea2d29336c910940abb1f8e71e02158ac51e7c4
---

{{DefaultAPISidebar("User Preferences API")}}{{SeeCompatTable}}

Die **User Preferences API** ermöglicht es Seitenautoren, auf programmatische Weise benutzerpräferenzbezogene [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)-Einstellungen zu überschreiben.

## Konzepte und Verwendung

Unterstützende User Agents definieren Werte für die CSS-Media Queries {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}, {{cssxref("@media/prefers-contrast", "prefers-contrast")}}, {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}, {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}} und {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}. Das [`PreferenceManager`](/de/docs/Web/API/PreferenceManager)-Objekt ermöglicht programmatischen Zugriff auf diese Präferenzen, wodurch Seitenautoren auf Präferenzänderungen lauschen und diese überschreiben können.

## Beispiele

### Umschalten des Dunkelmodus

Der folgende Code implementiert ein minimales Umschalten für den Dunkelmodus.

#### HTML

Das HTML enthält ein Formular mit drei Optionsfeldern. Diese Optionsfelder setzen das `color-scheme`-Feld auf entweder `system`, `light` oder `dark`.

```html live-sample___dark-mode-toggle
<!doctype html>
<html lang="en-US">
  <head>
    <meta name="color-scheme" content="light dark" />
  </head>
  <body>
    <form>
      <label>
        <input type="radio" name="color-scheme" value="light" />
        Light
      </label>
      <label>
        <input type="radio" name="color-scheme" value="dark" />
        Dark
      </label>
    </form>
  </body>
</html>
```

#### JavaScript

Das JavaScript registriert Ereignis-Listener für alle Elemente mit dem Namen `color-scheme`. Wenn der Wert `system` ist, entfernt der Handler das Überschreiben des Farbschemas. Andernfalls wird ein Farbschema-Überschreiben mit dem Wert des Eingabeelements angefordert.

```js live-sample___dark-mode-toggle
if (navigator.preferences) {
  const inputs = {
    light: document.querySelector('[name="color-scheme"][value="light"]'),
    dark: document.querySelector('[name="color-scheme"][value="dark"]'),
  };

  inputs[navigator.preferences.colorScheme.value].checked = true;

  inputs.light.addEventListener("change", () => {
    navigator.preferences.colorScheme.requestOverride("light");
  });
  inputs.dark.addEventListener("change", () => {
    navigator.preferences.colorScheme.requestOverride("dark");
  });

  navigator.preferences.colorScheme.addEventListener("change", () => {
    inputs[navigator.preferences.colorScheme.value].checked = true;
  });
} else {
  document.body.append(
    "Your browser doesn’t support the navigator.preferences API",
  );
}
```

#### Ergebnis

```css hidden live-sample___dark-mode-toggle
body {
  font-family: system-ui, sans-serif;
}

label {
  display: block;
  margin: 0.5em 0;
}
```

{{EmbedLiveSample("dark-mode-toggle", "100%", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
