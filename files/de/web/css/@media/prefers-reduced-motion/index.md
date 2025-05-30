---
title: prefers-reduced-motion
slug: Web/CSS/@media/prefers-reduced-motion
l10n:
  sourceCommit: 00c251f8af367d13d5bb8f0f86638072930e9056
---

{{CSSRef}}

> [!WARNING]
> Ein eingebettetes Beispiel am Ende dieser Seite enthält eine skalierende Bewegung, die für einige Leser problematisch sein kann. Leser mit vestibulären Bewegungsstörungen sollten möglicherweise die Funktion zur Reduzierung von Bewegungen auf ihrem Gerät aktivieren, bevor sie die Animation ansehen.

Das **`prefers-reduced-motion`** [CSS]-[Media-Feature](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob ein Nutzer auf seinem Gerät eine Einstellung aktiviert hat, um die Menge an nicht essenziellen Bewegungen zu minimieren. Die Einstellung wird verwendet, um dem Browser auf dem Gerät mitzuteilen, dass der Nutzer eine Benutzeroberfläche bevorzugt, die bewegungsbasierte Animationen entfernt, reduziert oder ersetzt.

Solche Animationen können Unbehagen bei Personen mit [vestibulären Bewegungsstörungen](https://www.a11yproject.com/posts/understanding-vestibular-disorders/) auslösen. Animationen wie das Skalieren oder Schwenken großer Objekte können vestibuläre Bewegungsauslöser sein.

```css
@media (prefers-reduced-motion: reduce) {
  /* styles to apply if a user's device settings are set to reduced motion */
}
```

## Syntax

- `no-preference`
  - : Gibt an, dass ein Nutzer keine Präferenz auf dem Gerät bekannt gegeben hat. Dieser Schlüsselwortwert wird als falsch bewertet.
- `reduce`
  - : Gibt an, dass ein Nutzer die Einstellung auf seinem Gerät zur Reduzierung von Bewegungen aktiviert hat. Der `reduce`-Schlüsselwortwert wird als wahr bewertet; daher ist `@media (prefers-reduced-motion)` gleichbedeutend mit `@media (prefers-reduced-motion: reduce)`.

## Nutzerpräferenzen

Für Firefox wird die `reduce`-Anfrage beachtet, wenn:

- In GTK/GNOME: Einstellungen > Barrierefreiheit > Sehen > Reduzierte Animation ist eingeschaltet.

  - In älteren Versionen von GNOME, GNOME Tweaks > Allgemeiner Tab (oder Erscheinungsbild, je nach Version) > Animationen sind ausgeschaltet.
  - Alternativ fügen Sie `gtk-enable-animations = false` zum `[Settings]`-Block der [GTK 3-Konfigurationsdatei](https://wiki.archlinux.org/title/GTK#Configuration) hinzu.

- In Plasma/KDE: Systemeinstellungen > Arbeitsbereichsverhalten -> Allgemeines Verhalten > „Animationsgeschwindigkeit“ ist ganz rechts auf „Sofort“ eingestellt.
- In Windows 10: Einstellungen > Erleichterte Bedienung > Anzeige > Animationen in Windows anzeigen.
- In Windows 11: Einstellungen > Barrierefreiheit > Visuelle Effekte > Animationseffekte
- In macOS: Systemeinstellungen > Barrierefreiheit > Anzeige > Bewegung reduzieren.
- In iOS: Einstellungen > Bedienungshilfen > Bewegung.
- In Android 9+: Einstellungen > Barrierefreiheit > Animationen entfernen.
- In Firefox `about:config`: Fügen Sie eine Nummernpräferenz namens `ui.prefersReducedMotion` hinzu und setzen Sie deren Wert entweder auf `0` für vollständige Animation oder auf `1`, um eine Vorliebe für reduzierte Bewegungen anzuzeigen. Änderungen an dieser Präferenz treten sofort in Kraft.

## Beispiele

Dieses Beispiel verwendet eine skalierende Animation, um `prefers-reduced-motion` zu demonstrieren. Wenn Sie die Einstellung zur Reduzierung von Bewegungen in den Barrierefreiheitseinstellungen auf Ihrem Gerät aktivieren, erkennt die `prefers-reduced-motion`-Media-Anfrage Ihre Präferenz und das CSS innerhalb der Reduktionsbewegungsregeln, die die gleiche [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) haben, aber später in der [CSS-Quellreihenfolge](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order) erscheinen, wird Vorrang haben. Infolgedessen wird die [Animation](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) auf dem Kasten zur `dissolve`-Animation, die eine gedämpftere Animation ist, die keinen vestibulären Bewegungsauslöser hat.

### Abschwächung der Animationserweiterung

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

Sie können die Einstellung zur Reduzierung von Bewegungen auf [Ihrem Gerät](#nutzerpräferenzen) aktivieren, um die Änderung bei der Animationserweiterung zu sehen. In diesem Beispiel werden die Hintergrundfarbe und die Linie über dem Text verwendet, um visuell hervorzuheben, wann die Keyframe-Animation in Reaktion auf das Aktivieren oder Deaktivieren der Einstellung wechselt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} HTTP Header [User Agent Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints)
- [Eine Einführung in die Media-Anfrage zur reduzierten Bewegung](https://css-tricks.com/introduction-reduced-motion-media-query/) auf CSS-Tricks (2019)
- [Responsive Design für Bewegungen](https://webkit.org/blog/7551/responsive-design-for-motion/) im WebKit-Blog (2017)
