---
title: prefers-reduced-motion
slug: Web/CSS/@media/prefers-reduced-motion
l10n:
  sourceCommit: 7f460077d6f16c939718e9482a8270166f6d9abd
---

> [!WARNING]
> Ein eingebettetes Beispiel am Ende dieser Seite enthält eine skalierende Bewegung, die für einige Leser problematisch sein kann. Leser mit vestibulären Bewegungsstörungen sollten die Bewegungsreduktion auf ihrem Gerät aktivieren, bevor sie die Animation ansehen.

Das **`prefers-reduced-motion`** [CSS](/de/docs/Web/CSS) [Medienfeature](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob ein Benutzer auf seinem Gerät eine Einstellung aktiviert hat, die die Menge nicht notwendiger Bewegungen minimiert. Diese Einstellung wird verwendet, um dem Browser auf dem Gerät mitzuteilen, dass der Benutzer eine Benutzeroberfläche bevorzugt, die bewegungsbasierte Animationen entfernt, reduziert oder ersetzt.

Solche Animationen können bei Personen mit [vestibulären Bewegungsstörungen](https://www.a11yproject.com/posts/understanding-vestibular-disorders/) Unbehagen auslösen. Animationen wie das Skalieren oder Verschieben großer Objekte können Auslöser für vestibuläre Bewegungen sein.

## Syntax

- `no-preference`
  - : Gibt an, dass ein Benutzer keine Präferenz auf dem Gerät angegeben hat. Dieser Schlüsselwortwert wird als falsch bewertet.
- `reduce`
  - : Gibt an, dass ein Benutzer die Einstellung für reduzierte Bewegung auf seinem Gerät aktiviert hat. Der Schlüsselwortwert `reduce` wird als wahr bewertet; daher ist `@media (prefers-reduced-motion)` äquivalent zu `@media (prefers-reduced-motion: reduce)`.

## Benutzereinstellungen

Für Firefox wird die Anforderung `reduce` berücksichtigt, wenn:

- Unter GTK/GNOME: Einstellungen > Barrierefreiheit > Sehen > Reduzierte Bewegung ist eingeschaltet.
  - In älteren Versionen von GNOME ist GNOME Tweaks > Allgemein (oder Aussehen, je nach Version) > Animationen ausgeschaltet.
  - Alternativ fügen Sie `gtk-enable-animations = false` zum `[Settings]` Block der [GTK 3 Konfigurationsdatei](https://wiki.archlinux.org/title/GTK#Configuration) hinzu.

- Unter Plasma/KDE: Systemeinstellungen > Arbeitsbereich Verhalten -> Allgemeines Verhalten > "Animationsgeschwindigkeit" ist ganz rechts auf "Sofort" gesetzt.
- In Windows 10: Einstellungen > Erleichterte Bedienung > Anzeige > Animationen in Windows anzeigen.
- In Windows 11: Einstellungen > Barrierefreiheit > Visuelle Effekte > Animationseffekte
- Unter macOS: Systemeinstellungen > Bedienungshilfen > Display > Bewegung reduzieren.
- In iOS: Einstellungen > Bedienungshilfen > Bewegung.
- In Android 9+: Einstellungen > Bedienungshilfen > Animationen entfernen.
- In Firefox `about:config`: Fügen Sie eine Nummernpräferenz namens `ui.prefersReducedMotion` hinzu und setzen Sie deren Wert entweder auf `0` für vollständige Animation oder auf `1`, um eine Präferenz für reduzierte Bewegung anzuzeigen. Änderungen an dieser Einstellung treten sofort in Kraft.

## Beispiele

Dieses Beispiel verwendet eine Skalierungsanimation, um `prefers-reduced-motion` zu demonstrieren. Wenn Sie die Einstellung zur Bewegungsreduzierung in den Barrierefreiheitseinstellungen auf Ihrem Gerät aktivieren, erkennt die Medienabfrage `prefers-reduced-motion` Ihre Präferenz und das CSS innerhalb der Regeln zur reduzierten Bewegung, mit derselben [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity), aber später in der [CSS-Quellreihenfolge](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order), wird Vorrang haben. Infolgedessen wird die [Animation](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) auf der Box zur `dissolve` Animation, einer gedämpfteren Animation, die keinen vestibulären Bewegungsauslöser darstellt.

### Die Animation skalierung reduzieren

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
  color: white;
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

Sie können die Einstellung zur Bewegungsreduzierung auf [Ihrem Gerät](#benutzereinstellungen) aktivieren, um die Änderung in der Animationsskalierung zu sehen. In diesem Beispiel wird die Hintergrundfarbe und die Linie über dem Text verwendet, um visuell hervorzuheben, wann die Keyframe-Animation in Reaktion auf die aktivierte oder deaktivierte Einstellung umschaltet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} HTTP-Header [User-Agent-Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints)
- [Eine Einführung zum "reduce motion" Medien-Feature](https://css-tricks.com/introduction-reduced-motion-media-query/) auf CSS-Tricks (2019)
- [Responsive Design für Bewegung](https://webkit.org/blog/7551/responsive-design-for-motion/) im WebKit-Blog (2017)
