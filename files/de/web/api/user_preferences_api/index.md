---
title: User Preferences API
slug: Web/API/User_Preferences_API
l10n:
  sourceCommit: ac0fef0566bfd672c44644a95240b8e1407277bd
---

{{DefaultAPISidebar("User Preferences API")}}{{SeeCompatTable}}

Die **Benutzerpräferenzen-API** ermöglicht es Seitenautoren, die einstellungsbezogenen {{cssxref("Guides/Media_queries", "Media Query")}}-Einstellungen der Benutzer programmgesteuert zu überschreiben.

## Konzepte und Verwendung

Unterstützende Benutzeragenten definieren Werte für die CSS-Media-Queries {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}}, {{cssxref("@media/prefers-contrast", "prefers-contrast")}}, {{cssxref("@media/prefers-reduced-motion", "prefers-reduced-motion")}}, {{cssxref("@media/prefers-reduced-transparency", "prefers-reduced-transparency")}} und {{cssxref("@media/prefers-reduced-data", "prefers-reduced-data")}}. Das [`PreferenceManager`](/de/docs/Web/API/PreferenceManager)-Objekt bietet programmgesteuerten Zugriff auf diese Präferenzen, sodass Seitenautoren Präferenzänderungen überwachen und überschreiben können.

## Beispiele

### Umschaltung für den Dunkelmodus

Der folgende Code implementiert eine minimale Umschaltung für den Dunkelmodus.

#### HTML

Das HTML enthält ein Formular mit drei Optionsfeldern. Diese Optionsfelder setzen das `color-scheme`-Feld entweder auf `system`, `light` oder `dark`.

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

Das JavaScript registriert Event-Listener für Änderungen bei allen Elementen, die `color-scheme` heißen. Ist der Wert `system`, entfernt der Handler die Farbschemasüberschreibung. Andernfalls fordert er eine Farbschemasüberschreibung mit dem Wert des Eingabeelements an.

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
