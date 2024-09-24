---
title: bevorzugt-reduzierte-Bewegung
slug: Web/CSS/@media/prefers-reduced-motion
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

> [!WARNING]
> Ein eingebettetes Beispiel am Ende dieser Seite hat eine Skalierungsbewegung, die für einige Leser problematisch sein könnte. Leser mit vestibulären Bewegungsstörungen sollten die Reduzierung von Bewegungen auf ihrem Gerät aktivieren, bevor sie die Animation ansehen.

Die **`prefers-reduced-motion`**- [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um die Menge an nicht wesentlichen Bewegungen zu minimieren. Diese Einstellung wird verwendet, um dem Browser auf dem Gerät mitzuteilen, dass der Benutzer eine Benutzeroberfläche bevorzugt, die Bewegungsanimationen entfernt, reduziert oder ersetzt.

Solche Animationen können bei Personen mit [vestibulären Bewegungsstörungen](https://www.a11yproject.com/posts/understanding-vestibular-disorders/) Unwohlsein auslösen. Animationen wie das Skalieren oder Schwenken großer Objekte können vestibuläre Bewegungsauslöser sein.

```css
@media (prefers-reduced-motion) {
  /* Stile anwenden, wenn die Geräteeinstellungen eines Benutzers auf reduzierte Bewegung eingestellt sind */
}
```

## Syntax

- `no-preference`
  - : Zeigt an, dass ein Benutzer keine Vorlieben auf dem Gerät angegeben hat. Dieser Schlüsselwortwert wird als falsch bewertet.
- `reduce`
  - : Zeigt an, dass ein Benutzer die Einstellung für reduzierte Bewegungen auf seinem Gerät aktiviert hat. Dieser Schlüsselwortwert wird als wahr bewertet.

## Benutzerpräferenzen

Für Firefox wird die `reduce`-Anfrage berücksichtigt, wenn:

- In GTK/GNOME: Einstellungen > Barrierefreiheit > Sehen > Reduzierte Animation ist eingeschaltet.

  - In älteren Versionen von GNOME: GNOME Tweaks > Allgemein (oder Aussehen, je nach Version) > Animationen ist ausgeschaltet.
  - Alternativ fügen Sie `gtk-enable-animations = false` zum `[Settings]`-Block der [GTK 3-Konfigurationsdatei](https://wiki.archlinux.org/title/GTK#Configuration) hinzu.

- In Plasma/KDE: Systemeinstellungen > Arbeitsbereich-Verhalten -> Allgemeines Verhalten > "Animationsgeschwindigkeit" ist ganz nach rechts auf "Sofort" eingestellt.
- In Windows 10: Einstellungen > Erleichterte Bedienung > Anzeige > Animationen in Windows anzeigen.
- In Windows 11: Einstellungen > Barrierefreiheit > Visuelle Effekte > Animationseffekte
- In macOS: Systemeinstellungen > Bedienungshilfen > Anzeige > Bewegungen reduzieren.
- In iOS: Einstellungen > Bedienungshilfen > Bewegung.
- In Android 9+: Einstellungen > Bedienungshilfen > Animationen entfernen.
- In Firefox `about:config`: Fügen Sie eine Nummernpräferenz namens `ui.prefersReducedMotion` hinzu und setzen Sie ihren Wert entweder auf `0` für volle Animation oder auf `1`, um eine Präferenz für reduzierte Bewegungen anzuzeigen. Änderungen an dieser Präferenz werden sofort wirksam.

## Beispiele

Dieses Beispiel verwendet eine Skalierung Animation, um `prefers-reduced-motion` zu demonstrieren. Wenn Sie die Einstellung zur Reduzierung von Bewegungen in den Bedienungshilfeneinstellungen auf Ihrem Gerät aktivieren, wird die Media-Abfrage `prefers-reduced-motion` Ihre Präferenz erkennen und das CSS innerhalb der Regeln für reduzierte Bewegungen, mit derselben [Spezifität](/de/docs/Web/CSS/Specificity), aber später in der [CSS-Quellreihenfolge](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#source_order), wird Vorrang haben. Infolgedessen wird die [Animation](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) auf der Box zur `dissolve`-Animation abgeschwächt, welche eine gedämpfte Animation ist, die keine vestibulären Bewegungsauslöser sind.

### Die Skalierungsanimation abschwächen

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

/* Schwächen Sie die Animation ab, um vestibuläre Bewegungsauslöser zu vermeiden. */
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

Sie können die Einstellung zur Reduzierung von Bewegungen auf [Ihrem Gerät](#benutzerpräferenzen) aktivieren, um die Änderung in der Animationsskalierung zu sehen. Dieses Beispiel verwendet die Hintergrundfarbe und die Linie über dem Text, um visuell hervorzuheben, wann die Keyframe-Animation als Reaktion auf das Aktivieren oder Deaktivieren der Einstellung umschaltet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} HTTP-Header [User Agent Client Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints)
- [Eine Einführung in die Media-Abfrage für reduzierte Bewegungen](https://css-tricks.com/introduction-reduced-motion-media-query/) auf CSS-Tricks (2019)
- [Responsives Design für Bewegungen](https://webkit.org/blog/7551/responsive-design-for-motion/) auf dem WebKit Blog (2017)
