---
title: prefers-reduced-motion
slug: Web/CSS/@media/prefers-reduced-motion
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

> [!WARNING]
> Ein eingebettetes Beispiel am Ende dieser Seite enthält eine Skalierungsbewegung, die für einige Leser problematisch sein könnte. Leser mit vestibulären Bewegungsstörungen sollten möglicherweise die Bewegungsreduktionsfunktion auf ihrem Gerät aktivieren, bevor sie die Animation ansehen.

Das **`prefers-reduced-motion`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um die Menge an nicht wesentlichen Bewegungen zu minimieren. Diese Einstellung teilt dem Browser auf dem Gerät mit, dass der Benutzer eine Benutzeroberfläche bevorzugt, die bewegungsbasierte Animationen entfernt, reduziert oder ersetzt.

Solche Animationen können bei Personen mit [vestibulären Bewegungsstörungen](https://www.a11yproject.com/posts/understanding-vestibular-disorders/) Unbehagen auslösen. Animationen wie das Skalieren oder Verschieben großer Objekte können Auslöser für vestibuläre Bewegungen sein.

## Syntax

- `no-preference`
  - : Gibt an, dass ein Benutzer auf dem Gerät keine Präferenz angegeben hat. Dieser Schlüsselwortwert wird als false ausgewertet.
- `reduce`
  - : Gibt an, dass ein Benutzer die Einstellung auf seinem Gerät für reduzierte Bewegungen aktiviert hat. Der Schlüsselwortwert `reduce` wird als true ausgewertet; daher ist `@media (prefers-reduced-motion)` gleichbedeutend mit `@media (prefers-reduced-motion: reduce)`.

## Benutzerpräferenzen

Für Firefox wird die `reduce`-Anforderung berücksichtigt, wenn:

- In GTK/GNOME: Einstellungen > Barrierefreiheit > Sehen > Reduzierte Animation ist eingeschaltet.
  - In älteren Versionen von GNOME ist unter GNOME Tweaks > Allgemein (oder Aussehen, je nach Version) > Animationen ausgeschaltet.
  - Alternativ fügen Sie `gtk-enable-animations = false` zum `[Settings]` Block der [GTK 3 Konfigurationsdatei](https://wiki.archlinux.org/title/GTK#Configuration) hinzu.

- In Plasma/KDE: Systemeinstellungen > Arbeitsbereich-Verhalten -> Allgemeines Verhalten > "Animationsgeschwindigkeit" ist ganz nach rechts auf "Sofort" eingestellt.
- In Windows 10: Einstellungen > Erleichterte Bedienung > Anzeige > Animationen in Windows anzeigen.
- In Windows 11: Einstellungen > Barrierefreiheit > Visuelle Effekte > Animationseffekte
- In macOS: Systemeinstellungen > Bedienungshilfen > Anzeige > Bewegung reduzieren.
- In iOS: Einstellungen > Bedienungshilfen > Bewegung.
- In Android 9+: Einstellungen > Bedienungshilfen > Animationen entfernen.
- In Firefox `about:config`: Fügen Sie eine numerische Einstellung namens `ui.prefersReducedMotion` hinzu und setzen ihren Wert entweder auf `0` für volle Animation oder auf `1`, um eine Präferenz für reduzierte Bewegungen anzuzeigen. Änderungen an dieser Einstellung treten sofort in Kraft.

## Beispiele

Dieses Beispiel verwendet eine Skalierungsanimation, um `prefers-reduced-motion` zu demonstrieren. Wenn Sie die Einstellung zur Bewegungsreduzierung in den Bedienungshilfen Ihres Geräts aktivieren, wird die `prefers-reduced-motion`-Media-Abfrage Ihre Präferenz erkennen, und das CSS innerhalb der Reduzierung von Bewegungsregeln, mit derselben [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) aber später in der [CSS-Quellreihenfolge](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order), wird Vorrang haben. Infolgedessen wird die [Animation](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) auf dem Kasten auf die `dissolve`-Animation heruntergetönt, die eine gedämpftere Animation ist, die kein vestibulärer Bewegungsauslöser ist.

### Die Skalierungsanimation herunterschalten

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
@media (prefers-reduced-motion: reduce) {
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

Sie können die Einstellung zur Reduzierung von Bewegungen auf [Ihrem Gerät](#benutzerpräferenzen) aktivieren, um die Änderung in der Skalierungsanimation zu sehen. Dieses Beispiel verwendet die Hintergrundfarbe und die Linie über dem Text, um visuell hervorzuheben, wann die Keyframe-Animation in Reaktion auf die aktivierte oder deaktivierte Einstellung wechselt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} HTTP-Header [User Agent Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints)
- [Eine Einführung in die Media-Abfrage für reduzierte Bewegungen](https://css-tricks.com/introduction-reduced-motion-media-query/) auf CSS-Tricks (2019)
- [Responsives Design für Bewegung](https://webkit.org/blog/7551/responsive-design-for-motion/) im WebKit Blog (2017)
