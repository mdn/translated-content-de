---
title: prefers-reduced-motion
slug: Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
l10n:
  sourceCommit: 77445f9812d0644dfe6975234f8ff3450efcf142
---

> [!WARNING]
> Ein eingebettetes Beispiel am Ende dieser Seite enthält eine Skalierungsbewegung, die für einige Leser problematisch sein könnte. Leser mit vestibulären Bewegungsstörungen sollten die Reduzierung der Bewegungen auf ihrem Gerät aktivieren, bevor sie die Animation betrachten.

Das **`prefers-reduced-motion`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) wird verwendet, um zu erkennen, ob ein Benutzer auf seinem Gerät eine Einstellung aktiviert hat, um die Menge an nicht wesentlichen Bewegungen zu minimieren. Diese Einstellung wird verwendet, um dem Browser auf dem Gerät mitzuteilen, dass der Benutzer eine Benutzeroberfläche bevorzugt, die bewegungsbasierte Animationen entfernt, reduziert oder ersetzt.

Solche Animationen können Unwohlsein bei Personen mit [vestibulären Bewegungsstörungen](https://www.a11yproject.com/posts/understanding-vestibular-disorders/) auslösen. Animationen wie das Skalieren oder Schwenken großer Objekte können vestibuläre Bewegungsauslöser sein.

## Syntax

- `no-preference`
  - : Gibt an, dass ein Benutzer keine Präferenz auf dem Gerät angegeben hat. Dieser Schlüsselwortwert wird als falsch bewertet.
- `reduce`
  - : Gibt an, dass ein Benutzer die Einstellung für reduzierte Bewegung auf seinem Gerät aktiviert hat. Der `reduce`-Schlüsselwortwert wird als wahr bewertet; daher ist `@media (prefers-reduced-motion)` äquivalent zu `@media (prefers-reduced-motion: reduce)`.

## Benutzerpräferenzen

Für Firefox wird die `reduce`-Anfrage berücksichtigt, wenn:

- In GTK/GNOME: Einstellungen > Barrierefreiheit > Sehen > Reduzierte Animation ist eingeschaltet.
  - In älteren Versionen von GNOME, GNOME Tweaks > Allgemein-Tab (oder Darstellung, je nach Version) > Animationen sind ausgeschaltet.
  - Alternativ fügen Sie `gtk-enable-animations = false` zum `[Settings]` Block der [GTK 3-Konfigurationsdatei](https://wiki.archlinux.org/title/GTK#Configuration) hinzu.
  - Zudem versuchen Sie, `gsettings set org.gnome.desktop.interface enable-animations false` auszuführen, damit Firefox (und andere Programme, die auf GTK Version 4 angewiesen sind) die `reduce`-Einstellung respektieren.

- In Plasma/KDE: Systemeinstellungen > Arbeitsbereich-Verhalten -> Allgemeines Verhalten > "Animationsgeschwindigkeit" ist ganz nach rechts auf "Sofort" gestellt.
  - Alternativ fügen Sie `AnimationDurationFactor=0` zum `[KDE]` Block von `~/.config/kdeglobals` hinzu.
  - Oder führen Sie einfach `kwriteconfig6 --key AnimationDurationFactor 0` in Ihrem Terminal aus.
- In Windows 10: Einstellungen > Erleichterte Bedienung > Anzeige > Animationen in Windows anzeigen.
- In Windows 11: Einstellungen > Barrierefreiheit > Visuelle Effekte > Animationseffekte
- In macOS: Systemeinstellungen > Bedienungshilfen > Anzeige > Bewegung reduzieren.
- In iOS: Einstellungen > Bedienungshilfen > Bewegung.
- In Android 9+: Einstellungen > Bedienungshilfen > Animationen entfernen.
- In Firefox `about:config`: Fügen Sie eine Nummernpräferenz namens `ui.prefersReducedMotion` hinzu und setzen Sie ihren Wert auf `0` für volle Animation oder auf `1`, um eine Vorliebe für reduzierte Bewegung anzugeben. Änderungen an dieser Präferenz treten sofort in Kraft.

## Beispiele

Dieses Beispiel verwendet eine Skalierungs-Animation, um `prefers-reduced-motion` zu demonstrieren. Wenn Sie die Einstellung zur Reduzierung von Bewegungen in den Barrierefreiheitseinstellungen auf Ihrem Gerät aktivieren, erkennt die `prefers-reduced-motion`-Media-Query Ihre Präferenz, und die CSS innerhalb der Regeln für reduzierte Bewegung, mit derselben [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) aber später in der [CSS-Quellreihenfolge](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#source_order), wird Vorrang haben. Dadurch wird die [Animation](/de/docs/Web/CSS/Guides/Animations/Using) auf der Box auf die `dissolve`-Animation abgeschwächt, eine gedämpftere Animation, die kein vestibulärer Bewegungsauslöser ist.

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

Sie können die Einstellung zur Reduzierung von Bewegungen auf [Ihrem Gerät](#benutzerpräferenzen) aktivieren, um die Änderung der Animationsskalierung zu sehen. Dieses Beispiel verwendet die Hintergrundfarbe und die Linie über dem Text, um visuell hervorzuheben, wann die Keyframe-Animation wechselt, als Reaktion auf das Aktivieren oder Deaktivieren der Einstellung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-CH-Prefers-Reduced-Motion")}} HTTP Header [User Agent Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints)
- [Eine Einführung in die Media Query für reduzierte Bewegung](https://css-tricks.com/introduction-reduced-motion-media-query/) auf CSS-Tricks (2019)
- [Responsive Design für Bewegung](https://webkit.org/blog/7551/responsive-design-for-motion/) auf dem WebKit-Blog (2017)
