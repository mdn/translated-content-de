---
title: prefers-reduced-motion
slug: Web/CSS/@media/prefers-reduced-motion
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{CSSRef}}

> [!WARNING]
> Ein eingebettetes Beispiel am Ende dieser Seite enthält eine Skalierungsbewegung, die für einige Leser problematisch sein könnte. Leser mit vestibulären Bewegungsstörungen sollten die Bewegungseinschränkungsfunktion auf ihrem Gerät aktivieren, bevor sie die Animation betrachten.

Die **`prefers-reduced-motion`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob ein Benutzer auf seinem Gerät eine Einstellung aktiviert hat, um die Menge an nicht wesentlicher Bewegung zu minimieren. Die Einstellung wird verwendet, um dem Browser auf dem Gerät mitzuteilen, dass der Benutzer eine Benutzeroberfläche bevorzugt, die bewegungsbasierte Animationen entfernt, reduziert oder ersetzt.

Solche Animationen können bei Personen mit [vestibulären Bewegungsstörungen](https://www.a11yproject.com/posts/understanding-vestibular-disorders/) Unbehagen auslösen. Animationen wie das Skalieren oder Schwenken großer Objekte können vestibuläre Bewegungsauslöser sein.

```css
@media (prefers-reduced-motion) {
  /* styles to apply if a user's device settings are set to reduced motion */
}
```

## Syntax

- `no-preference`
  - : Gibt an, dass ein Benutzer auf dem Gerät keine Präferenz bekanntgegeben hat. Dieser Schlüsselwortwert wird als false ausgewertet.
- `reduce`
  - : Gibt an, dass ein Benutzer die Einstellung auf seinem Gerät für reduzierte Bewegung aktiviert hat. Dieser Schlüsselwortwert wird als true ausgewertet.

## Benutzerpräferenzen

Für Firefox wird die `reduce`-Anfrage beachtet, wenn:

- In GTK/GNOME: Einstellungen > Barrierefreiheit > Sehen > Reduzierte Animation ist aktiviert.

  - In älteren Versionen von GNOME, GNOME Tweaks > Allgemein (oder Erscheinungsbild, je nach Version) > Animationen ist deaktiviert.
  - Alternativ fügen Sie `gtk-enable-animations = false` zum `[Settings]`-Block der [GTK 3-Konfigurationsdatei](https://wiki.archlinux.org/title/GTK#Configuration) hinzu.

- In Plasma/KDE: Systemeinstellungen > Arbeitsbereich Verhalten -> Allgemeines Verhalten > "Animationsgeschwindigkeit" ist ganz rechts auf "Sofort" gesetzt.
- In Windows 10: Einstellungen > Erleichterte Bedienung > Anzeige > Animationen in Windows anzeigen.
- In Windows 11: Einstellungen > Barrierefreiheit > Visuelle Effekte > Animationseffekte
- In macOS: Systemeinstellungen > Bedienungshilfen > Anzeige > Bewegung reduzieren.
- In iOS: Einstellungen > Bedienungshilfen > Bewegung.
- In Android 9+: Einstellungen > Bedienungshilfen > Animationen entfernen.
- In Firefox `about:config`: Fügen Sie eine Zahlenpräferenz namens `ui.prefersReducedMotion` hinzu und setzen Sie deren Wert auf `0` für vollständige Animation oder auf `1`, um eine Präferenz für reduzierte Bewegung anzugeben. Änderungen an dieser Präferenz treten sofort in Kraft.

## Beispiele

Dieses Beispiel verwendet eine Skalierungsanimation, um `prefers-reduced-motion` zu demonstrieren. Wenn Sie die Einstellung für reduzierte Bewegung in den Barrierefreiheitseinstellungen auf Ihrem Gerät aktivieren, wird die `prefers-reduced-motion` Medienabfrage Ihre Präferenz erkennen und das CSS innerhalb der reduzierten Bewegungsregeln, mit derselben [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity), aber später in der [CSS-Quellenreihenfolge](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order), Vorrang haben. Infolgedessen wird die [Animation](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) auf dem Kasten zur `dissolve`-Animation abgemildert, die eine weniger auffällige Animation ist, die kein vestibulärer Bewegungsauslöser ist.

### Abschwächung der Animationsskalierung

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

Sie können die Einstellung für reduzierte Bewegung auf [Ihrem Gerät](#benutzerpräferenzen) aktivieren, um die Änderung in der Animationsskalierung zu sehen. Dieses Beispiel verwendet die Hintergrundfarbe und die Linie über dem Text, um visuell hervorzuheben, wann die Keyframe-Animation als Reaktion auf das Aktivieren oder Deaktivieren der Einstellung wechselt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} HTTP-Header [User Agent Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#user-agent_client_hints)
- [Eine Einführung in die Medienabfrage für reduzierte Bewegung](https://css-tricks.com/introduction-reduced-motion-media-query/) auf CSS-Tricks (2019)
- [Responsives Design für Bewegung](https://webkit.org/blog/7551/responsive-design-for-motion/) im WebKit Blog (2017)
