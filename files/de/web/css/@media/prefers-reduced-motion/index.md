---
title: prefers-reduced-motion
slug: Web/CSS/@media/prefers-reduced-motion
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

> [!WARNING]
> Ein eingebettetes Beispiel am Ende dieser Seite enthält eine skalierende Bewegung, die für manche Leser problematisch sein kann. Leser mit vestibulären Bewegungsstörungen sollten möglicherweise die Funktion zur Reduzierung von Bewegungen auf ihrem Gerät aktivieren, bevor sie die Animation ansehen.

Das **`prefers-reduced-motion`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) wird verwendet, um zu erkennen, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um die Menge an nicht wesentlichen Bewegungen zu minimieren. Diese Einstellung teilt dem Browser auf dem Gerät mit, dass der Benutzer eine Benutzeroberfläche bevorzugt, die animationsbasierte Bewegungen entfernt, reduziert oder ersetzt.

Solche Animationen können bei Personen mit [vestibulären Bewegungsstörungen](https://www.a11yproject.com/posts/understanding-vestibular-disorders/) Unbehagen auslösen. Animationen wie das Skalieren oder Schwenken großer Objekte können vestibuläre Bewegungs-Auslöser sein.

```css
@media (prefers-reduced-motion) {
  /* styles to apply if a user's device settings are set to reduced motion */
}
```

## Syntax

- `no-preference`
  - : Gibt an, dass ein Benutzer keine Präferenz auf dem Gerät angegeben hat. Dieser Schlüsselwortwert wird als false bewertet.
- `reduce`
  - : Gibt an, dass ein Benutzer die Einstellung zur Bewegungsreduktion auf seinem Gerät aktiviert hat. Dieser Schlüsselwortwert wird als true bewertet.

## Benutzerpräferenzen

Im Firefox wird die `reduce`-Anforderung berücksichtigt, wenn:

- In GTK/GNOME: Einstellungen > Barrierefreiheit > Sehen > Reduzierte Animation ist eingeschaltet.

  - In älteren Versionen von GNOME, GNOME Tweaks > Allgemein (oder Darstellung, je nach Version) > Animationen sind ausgeschaltet.
  - Alternativ, fügen Sie `gtk-enable-animations = false` zum `[Settings]` Block der [GTK 3-Konfigurationsdatei](https://wiki.archlinux.org/title/GTK#Configuration) hinzu.

- In Plasma/KDE: Systemeinstellungen > Arbeitsbereich-Verhalten -> Allgemeines Verhalten > „Animationsgeschwindigkeit“ ist ganz rechts auf „Sofort“ eingestellt.
- In Windows 10: Einstellungen > Erleichterte Bedienung > Anzeige > Animationen in Windows anzeigen.
- In Windows 11: Einstellungen > Barrierefreiheit > Visuelle Effekte > Animationseffekte
- In macOS: Systemeinstellungen > Bedienungshilfen > Anzeige > Bewegung reduzieren.
- In iOS: Einstellungen > Bedienungshilfen > Bewegung.
- In Android 9+: Einstellungen > Bedienungshilfen > Animationen entfernen.
- In Firefox `about:config`: Fügen Sie eine Nummern-Präferenz namens `ui.prefersReducedMotion` hinzu und setzen Sie deren Wert entweder auf `0` für volle Animation oder auf `1`, um eine Präferenz für reduzierte Bewegung anzuzeigen. Änderungen an dieser Präferenz wirken sich sofort aus.

## Beispiele

Dieses Beispiel verwendet eine skalierende Animation, um `prefers-reduced-motion` zu demonstrieren. Wenn Sie die Einstellung zur Reduzierung von Bewegungen in den Barrierefreiheitspräferenzen auf Ihrem Gerät aktivieren, wird die `prefers-reduced-motion`-Media-Query Ihre Präferenz erkennen und die CSS-Regeln der reduzierten Bewegung mit derselben [Spezifität](/de/docs/Web/CSS/Specificity) aber spätere Reihenfolge in der [CSS-Quellreihenfolge](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#source_order), wird Vorrang haben. Als Ergebnis wird die [Animation](/de/docs/Web/CSS/CSS_animations/Using_CSS_animations) auf dem Kasten zur `dissolve`-Animation abgeschwächt, einer gedämpfteren Animation, die kein vestibulärer Bewegungs-Auslöser ist.

### Abschwächung der Animationenskalierung

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

Sie können die Einstellung zur Reduzierung von Bewegungen auf [Ihrem Gerät](#benutzerpräferenzen) aktivieren, um die Änderungen in der Animationenskalierung zu betrachten. Dieses Beispiel verwendet die Hintergrundfarbe und die Linie über dem Text, um visuell hervorzuheben, wenn die Keyframe-Animation als Reaktion auf die aktivierte oder deaktivierte Einstellung wechselt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} HTTP-Header [User Agent Client Hint](/de/docs/Web/HTTP/Client_hints#user-agent_client_hints)
- [Eine Einführung in die Reduced Motion Media Query](https://css-tricks.com/introduction-reduced-motion-media-query/) auf CSS-Tricks (2019)
- [Responsives Design für Bewegung](https://webkit.org/blog/7551/responsive-design-for-motion/) im WebKit Blog (2017)
