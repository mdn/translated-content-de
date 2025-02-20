---
title: prefers-reduced-motion
slug: Web/CSS/@media/prefers-reduced-motion
l10n:
  sourceCommit: a29769d6d10261f771321eb60f3990029c160924
---

{{CSSRef}}

> [!WARNING]
> Ein eingebettetes Beispiel am Ende dieser Seite enthält eine skalierende Bewegung, die für einige Leser problematisch sein könnte. Leser mit vestibulären Bewegungsstörungen sollten möglicherweise die Funktion zur Reduzierung von Bewegungen auf ihrem Gerät aktivieren, bevor sie die Animation ansehen.

Die **`prefers-reduced-motion`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um die Menge an nicht wesentlichen Bewegungen zu minimieren. Die Einstellung teilt dem Browser auf dem Gerät mit, dass der Benutzer eine Benutzeroberfläche bevorzugt, die Bewegungsanimationen entfernt, reduziert oder ersetzt.

Solche Animationen können Unbehagen bei Personen mit [vestibulären Bewegungsstörungen](https://www.a11yproject.com/posts/understanding-vestibular-disorders/) auslösen. Animationen wie das Skalieren oder Verschieben großer Objekte können vestibuläre Bewegungsauslöser sein.

```css
@media (prefers-reduced-motion) {
  /* styles to apply if a user's device settings are set to reduced motion */
}
```

## Syntax

- `no-preference`
  - : Gibt an, dass ein Benutzer keine Präferenz auf dem Gerät angegeben hat. Dieser Schlüsselwortwert wird als „false“ ausgewertet.
- `reduce`
  - : Gibt an, dass ein Benutzer die Einstellung auf seinem Gerät für reduzierte Bewegungen aktiviert hat. Dieser Schlüsselwortwert wird als „true“ ausgewertet.

## Benutzerpräferenzen

Für Firefox wird die `reduce`-Anforderung berücksichtigt, wenn:

- In GTK/GNOME: Einstellungen > Barrierefreiheit > Sehen > Reduzierte Animation ist eingeschaltet.

  - In älteren Versionen von GNOME: GNOME Tweaks > Allgemein-Tab (oder Erscheinungsbild, je nach Version) > Animationen ist ausgeschaltet.
  - Alternativ `gtk-enable-animations = false` zum `[Settings]`-Block [der GTK 3-Konfigurationsdatei](https://wiki.archlinux.org/title/GTK#Configuration) hinzufügen.

- In Plasma/KDE: Systemeinstellungen > Arbeitsbereich-Verhalten > Allgemeines Verhalten > "Animationsgeschwindigkeit" ist ganz rechts auf "Sofort" eingestellt.
- In Windows 10: Einstellungen > Erleichterte Bedienung > Anzeige > Animationen in Windows anzeigen.
- In Windows 11: Einstellungen > Barrierefreiheit > Visuelle Effekte > Animationseffekte.
- In macOS: Systemeinstellungen > Bedienungshilfen > Anzeige > Bewegung reduzieren.
- In iOS: Einstellungen > Bedienungshilfen > Bewegung.
- In Android 9+: Einstellungen > Bedienungshilfen > Animationen entfernen.
- In Firefox `about:config`: Eine numerische Einstellung mit dem Namen `ui.prefersReducedMotion` hinzufügen und ihren Wert auf entweder `0` für volle Animation oder auf `1` für eine Präferenz für reduzierte Bewegungen setzen. Änderungen an dieser Einstellung werden sofort wirksam.

## Beispiele

Dieses Beispiel verwendet eine Skalierungsanimation, um `prefers-reduced-motion` zu demonstrieren. Wenn Sie die Einstellung für das Reduzieren von Bewegungen in den Barrierefreiheitseinstellungen Ihres Geräts aktivieren, erkennt die `prefers-reduced-motion` Media-Abfrage Ihre Präferenz, und die CSS-Regeln für reduzierte Bewegung, die dieselbe [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) haben, aber später in der [CSS-Source-Order](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order) erscheinen, haben Vorrang. Dadurch wird die [Animation](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) der Box auf die `dissolve`-Animation abgeschwächt, die eine dezentere Animation ist und keine vestibulären Bewegungsauslöser hervorruft.

### Abschwächung der Animation durch Skalieren

#### HTML

```html
<div class="animation">animated box</div>
```

#### CSS

```css
.animation {
  animation: pulse 1s linear infinite both;
  background-color: purple;
}

/* Tone down the animation to avoid vestibular motion triggers. */
@media (prefers-reduced-motion) {
  .animation {
    animation: dissolve 4s linear infinite both;
    background-color: green;
    text-decoration: overline;
  }
}
```

```css hidden
.animation {
  color: #fff;
  font: 1.2em sans-serif;
  width: 10em;
  padding: 1em;
  border-radius: 1em;
  text-align: center;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes dissolve {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 1;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Toning down the animation scaling")}}

Sie können die Einstellung zum Reduzieren von Bewegungen auf [Ihrem Gerät](#benutzerpräferenzen) aktivieren, um die Änderung der Animationsskalierung anzuzeigen. Dieses Beispiel verwendet die Hintergrundfarbe und die Linie über dem Text, um visuell hervorzuheben, wann die Keyframe-Animation in Reaktion auf die aktivierte oder deaktivierte Einstellung wechselt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} HTTP-Header [User Agent Client Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints)
- [Eine Einführung in die Reduced Motion Media Query](https://css-tricks.com/introduction-reduced-motion-media-query/) auf CSS-Tricks (2019)
- [Responsive Design für Bewegung](https://webkit.org/blog/7551/responsive-design-for-motion/) im WebKit Blog (2017)
