---
title: prefers-reduced-motion
slug: Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

> [!WARNING]
> Ein eingebettetes Beispiel am Ende dieser Seite enthält eine Skalierungsbewegung, die für einige Leser problematisch sein könnte. Leser mit vestibulären Bewegungsstörungen sollten die Option zur Reduzierung von Bewegungen auf ihrem Gerät aktivieren, bevor sie die Animation ansehen.

Das **`prefers-reduced-motion`** [CSS](/de/docs/Web/CSS) [Medien-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um zu erkennen, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um die Menge unnötiger Bewegung zu minimieren. Diese Einstellung informiert den Browser auf dem Gerät darüber, dass der Benutzer eine Benutzeroberfläche bevorzugt, die bewegungsbasierte Animationen entfernt, reduziert oder ersetzt.

Solche Animationen können bei Personen mit [vestibulären Bewegungsstörungen](https://www.a11yproject.com/posts/understanding-vestibular-disorders/) Unwohlsein auslösen. Animationen wie das Skalieren oder Schwenken großer Objekte können Auslöser für vestibuläre Bewegungen sein.

## Syntax

- `no-preference`
  - : Gibt an, dass ein Benutzer keine Präferenz auf dem Gerät angegeben hat. Dieser Schlüsselwortwert wird als falsch ausgewertet.
- `reduce`
  - : Gibt an, dass ein Benutzer die Einstellung zur Reduzierung der Bewegung auf seinem Gerät aktiviert hat. Der `reduce` Schlüsselwortwert wird als wahr ausgewertet; daher ist `@media (prefers-reduced-motion)` gleichbedeutend mit `@media (prefers-reduced-motion: reduce)`.

## Benutzerpräferenzen

Für Firefox wird die `reduce`-Anforderung beachtet, wenn:

- In GTK/GNOME: Einstellungen > Barrierefreiheit > Sehen > Reduzierte Animationen ist aktiviert.
  - In älteren Versionen von GNOME ist GNOME Tweaks > Allgemeiner Tab (oder Darstellung, je nach Version) > Animationen deaktiviert.
  - Alternativ fügen Sie `gtk-enable-animations = false` zum `[Settings]` Block der [GTK 3 Konfigurationsdatei](https://wiki.archlinux.org/title/GTK#Configuration) hinzu.

- In Plasma/KDE: Systemeinstellungen > Arbeitsbereichsverhalten -> Allgemeines Verhalten > "Animationsgeschwindigkeit" ist ganz rechts auf "Sofort" eingestellt.
- In Windows 10: Einstellungen > Erleichterte Bedienung > Anzeige > Animationen in Windows anzeigen.
- In Windows 11: Einstellungen > Barrierefreiheit > Visuelle Effekte > Animations-Effekte
- In macOS: Systemeinstellungen > Bedienungshilfen > Anzeige > Bewegung reduzieren.
- In iOS: Einstellungen > Bedienungshilfen > Bewegung.
- In Android 9+: Einstellungen > Barrierefreiheit > Animationen entfernen.
- In Firefox `about:config`: Fügen Sie eine Nummernpräferenz namens `ui.prefersReducedMotion` hinzu und setzen Sie deren Wert entweder auf `0` für volle Animation oder auf `1`, um eine Präferenz für reduzierte Bewegung anzuzeigen. Änderungen an dieser Einstellung werden sofort wirksam.

## Beispiele

Dieses Beispiel verwendet eine Skalierungsanimation, um `prefers-reduced-motion` zu demonstrieren. Wenn Sie die Einstellung zur Reduzierung von Bewegungen in den Barrierefreiheitseinstellungen auf Ihrem Gerät aktivieren, erkennt die `prefers-reduced-motion` Medienanfrage Ihre Präferenz und das CSS innerhalb der Regeln zur reduzierten Bewegung, mit der gleichen [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity), aber später in der [CSS-Quellenreihenfolge](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order), erhält Vorrang. Infolgedessen wird die [Animation](/de/docs/Web/CSS/Guides/Animations/Using) auf der Box auf die `dissolve`-Animation gedämpft, was eine gedämpftere Animation ist, die kein Auslöser für vestibuläre Bewegungen ist.

### Die Animation skalieren

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

Sie können die Einstellung zur Reduzierung von Bewegungen auf [Ihrem Gerät](#benutzerpräferenzen) aktivieren, um die Änderung der Animationsskalierung zu sehen. Dieses Beispiel verwendet die Hintergrundfarbe und die Linie über dem Text, um visuell hervorzuheben, wann die Keyframe-Animation in Reaktion auf die aktivierte oder deaktivierte Einstellung umschaltet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} HTTP-Header [User Agent Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints)
- [Einführung in die Medienanfrage zu reduzierter Bewegung](https://css-tricks.com/introduction-reduced-motion-media-query/) auf CSS-Tricks (2019)
- [Responsive Design für Bewegung](https://webkit.org/blog/7551/responsive-design-for-motion/) auf dem WebKit Blog (2017)
