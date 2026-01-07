---
title: prefers-reduced-motion
slug: Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
l10n:
  sourceCommit: 9384ca24b4e9402ccb4f0fbcf9fd8e35913a623a
---

> [!WARNING]
> Ein eingebettetes Beispiel am Ende dieser Seite enthält eine skalierende Bewegung, die für einige Leser problematisch sein könnte. Leser mit vestibulären Bewegungsstörungen sollten die Funktion zur Reduzierung von Bewegungen auf ihrem Gerät aktivieren, bevor sie die Animation ansehen.

Das **`prefers-reduced-motion`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um zu erkennen, ob ein Benutzer eine Einstellung auf seinem Gerät aktiviert hat, um die Menge an nicht wesentlichen Bewegungen zu minimieren. Diese Einstellung wird verwendet, um dem Browser auf dem Gerät mitzuteilen, dass der Benutzer eine Benutzeroberfläche bevorzugt, die bewegungsbasierte Animationen entfernt, reduziert oder ersetzt.

Solche Animationen können bei Personen mit [vestibulären Bewegungsstörungen](https://www.a11yproject.com/posts/understanding-vestibular-disorders/) Unwohlsein hervorrufen. Animationen wie das Skalieren oder Schwenken großer Objekte können vestibuläre Bewegungsauslöser sein.

## Syntax

- `no-preference`
  - : Gibt an, dass ein Benutzer keine Präferenz auf dem Gerät angegeben hat. Dieser Schlüsselwortwert wird als falsch ausgewertet.
- `reduce`
  - : Gibt an, dass ein Benutzer die Einstellung für reduzierte Bewegung auf seinem Gerät aktiviert hat. Der Schlüsselwortwert `reduce` wird als wahr ausgewertet; daher ist `@media (prefers-reduced-motion)` gleichbedeutend mit `@media (prefers-reduced-motion: reduce)`.

## Benutzerpräferenzen

Für Firefox wird die `reduce`-Anforderung berücksichtigt, wenn:

- In GTK/GNOME: Einstellungen > Barrierefreiheit > Sehen > Reduzierte Animation ist aktiviert.
  - In älteren Versionen von GNOME, GNOME Tweaks > Allgemein (oder Aussehen, je nach Version) > Animationen ist deaktiviert.
  - Alternativ fügen Sie `gtk-enable-animations = false` zum `[Settings]`-Block der [GTK 3 Konfigurationsdatei](https://wiki.archlinux.org/title/GTK#Configuration) hinzu.

- In Plasma/KDE: Systemeinstellungen > Arbeitsflächeneinstellungen -> Allgemeines Verhalten > "Animationsgeschwindigkeit" ist ganz nach rechts auf "Sofort" eingestellt.
  - Alternativ fügen Sie `AnimationDurationFactor=0` zum `[KDE]` Block von `~/.config/kdeglobals` hinzu.
  - Oder führen Sie einfach `kwriteconfig6 --key AnimationDurationFactor 0` in Ihrem Terminal aus.
- In Windows 10: Einstellungen > Erleichterte Bedienung > Anzeige > Animationen in Windows anzeigen.
- In Windows 11: Einstellungen > Barrierefreiheit > Visuelle Effekte > Animationseffekte.
- In macOS: Systemeinstellungen > Bedienungshilfen > Anzeige > Bewegung reduzieren.
- In iOS: Einstellungen > Bedienungshilfen > Bewegung.
- In Android 9+: Einstellungen > Bedienungshilfen > Animationen entfernen.
- In Firefox `about:config`: Fügen Sie eine Zahlenpräferenz mit dem Namen `ui.prefersReducedMotion` hinzu und setzen Sie ihren Wert entweder auf `0` für volle Animation oder auf `1`, um eine Präferenz für reduzierte Bewegung anzugeben. Änderungen an dieser Präferenz werden sofort wirksam.

## Beispiele

Dieses Beispiel verwendet eine Skalierungsanimation, um `prefers-reduced-motion` zu demonstrieren. Wenn Sie die Einstellung zur Reduzierung von Bewegungen in den Bedienungshilfeneinstellungen auf Ihrem Gerät aktivieren, erkennt die `prefers-reduced-motion`-Medienabfrage Ihre Präferenz und das CSS innerhalb der reduzierten Bewegungsregeln mit derselben [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity), aber später in der [CSS-Quellreihenfolge](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order), wird Vorrang haben. Dadurch wird die [Animation](/de/docs/Web/CSS/Guides/Animations/Using) auf dem Kasten zur `dissolve`-Animation abgeschwächt, einer gedämpfteren Animation, die kein vestibulärer Bewegungsauslöser ist.

### Abmildern der Animation beim Skalieren

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

Sie können die Einstellung zur Reduzierung von Bewegungen auf [Ihrem Gerät](#benutzerpräferenzen) aktivieren, um die Änderung der Skalierungsanimation zu sehen. Dieses Beispiel verwendet die Hintergrundfarbe und die Linie über dem Text, um visuell hervorzuheben, wann die Keyframe-Animation als Reaktion auf die aktivierte oder deaktivierte Einstellung wechselt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} HTTP-Header [User Agent Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints)
- [Eine Einführung in die reduzierte Bewegungsmedienabfrage](https://css-tricks.com/introduction-reduced-motion-media-query/) auf CSS-Tricks (2019)
- [Responsive Design für Bewegung](https://webkit.org/blog/7551/responsive-design-for-motion/) auf dem WebKit Blog (2017)
