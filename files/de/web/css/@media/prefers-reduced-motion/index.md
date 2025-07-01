---
title: prefers-reduced-motion
slug: Web/CSS/@media/prefers-reduced-motion
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

{{CSSRef}}

> [!WARNING]
> Ein eingebettetes Beispiel am Ende dieser Seite enthält eine Skalierungsbewegung, die für einige Leser problematisch sein könnte. Leser mit vestibulären Bewegungsstörungen sollten die Reduzierung von Bewegungen auf ihrem Gerät aktivieren, bevor sie die Animation ansehen.

Das **`prefers-reduced-motion`** [CSS](/de/docs/Web/CSS)-[Medienmerkmal](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob ein Benutzer auf seinem Gerät eine Einstellung aktiviert hat, um die Menge an nicht notwendigen Bewegungen zu minimieren. Diese Einstellung vermittelt dem Browser auf dem Gerät, dass der Benutzer eine Benutzeroberfläche bevorzugt, die bewegungsbasierte Animationen entfernt, reduziert oder ersetzt.

Solche Animationen können bei Personen mit [vestibulären Bewegungsstörungen](https://www.a11yproject.com/posts/understanding-vestibular-disorders/) Unbehagen auslösen. Animationen wie das Skalieren oder Verschieben von großen Objekten können Auslöser für vestibuläre Bewegungen sein.

## Syntax

- `no-preference`
  - : Gibt an, dass ein Benutzer keine Präferenz auf dem Gerät bekannt gemacht hat. Dieser Schlüsselwortwert wird als falsch bewertet.
- `reduce`
  - : Gibt an, dass ein Benutzer die Einstellung auf seinem Gerät für reduzierte Bewegung aktiviert hat. Der `reduce`-Schlüsselwortwert wird als wahr bewertet; daher ist `@media (prefers-reduced-motion)` gleichbedeutend mit `@media (prefers-reduced-motion: reduce)`.

## Benutzerpräferenzen

Für Firefox wird die `reduce`-Anforderung berücksichtigt, wenn:

- In GTK/GNOME: Einstellungen > Barrierefreiheit > Sehen > Reduzierte Animation ist aktiviert.
  - In älteren Versionen von GNOME: GNOME Tweaks > Allgemein (oder Darstellung, je nach Version) > Animationen ist deaktiviert.
  - Alternativ fügen Sie `gtk-enable-animations = false` zum `[Settings]`-Block der [GTK 3-Konfigurationsdatei](https://wiki.archlinux.org/title/GTK#Configuration) hinzu.

- In Plasma/KDE: Systemeinstellungen > Arbeitsbereich-Verhalten > Allgemeines Verhalten > "Animationsgeschwindigkeit" wird ganz nach rechts auf "Sofort" gesetzt.
- In Windows 10: Einstellungen > Erleichterte Bedienung > Anzeige > Animationen in Windows anzeigen.
- In Windows 11: Einstellungen > Barrierefreiheit > Visuelle Effekte > Animationseffekte
- In macOS: Systemeinstellungen > Bedienungshilfen > Anzeige > Bewegung reduzieren.
- In iOS: Einstellungen > Bedienungshilfen > Bewegung.
- In Android 9+: Einstellungen > Bedienungshilfen > Animationen entfernen.
- In Firefox `about:config`: Fügen Sie ein Zahlenpräferenz namens `ui.prefersReducedMotion` hinzu und setzen dessen Wert auf entweder `0` für volle Animation oder `1`, um eine Präferenz für reduzierte Bewegung anzuzeigen. Änderungen an dieser Präferenz werden sofort wirksam.

## Beispiele

Dieses Beispiel verwendet eine Skalierungsanimation, um `prefers-reduced-motion` zu demonstrieren. Wenn Sie die Einstellungsoption für reduzierte Bewegung in den Barrierefreiheitseinstellungen auf Ihrem Gerät aktivieren, erkennt die `prefers-reduced-motion`-Medienabfrage Ihre Präferenz und das CSS innerhalb der Regeln für reduzierte Bewegung, mit derselben [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity), aber später in der [CSS-Quellreihenfolge](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order), wird Vorrang erhalten. Infolgedessen wird die [Animation](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) auf dem Kasten auf die `dissolve`-Animation abgeschwächt, welche eine gedämpftere Animation ist, die keinen Trigger für vestibuläre Bewegungen darstellt.

### Abschwächung der Skalierungsanimation

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

Sie können die Einstellungsoption für reduzierte Bewegung [auf Ihrem Gerät](#benutzerpräferenzen) aktivieren, um die Änderung der Animationsskalierung zu beobachten. In diesem Beispiel werden die Hintergrundfarbe und die Linie über dem Text verwendet, um visuell hervorzuheben, wann die Schlüsselbildanimation wechselt, wenn die Einstellung aktiviert oder deaktiviert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} HTTP-Header [User Agent Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints)
- [Eine Einführung in die Medienabfrage für reduzierte Bewegung](https://css-tricks.com/introduction-reduced-motion-media-query/) auf CSS-Tricks (2019)
- [Reaktionsfähiges Design für Bewegung](https://webkit.org/blog/7551/responsive-design-for-motion/) im WebKit Blog (2017)
