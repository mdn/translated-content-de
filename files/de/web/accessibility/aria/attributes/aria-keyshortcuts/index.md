---
title: aria-keyshortcuts
slug: Web/Accessibility/ARIA/Attributes/aria-keyshortcuts
l10n:
  sourceCommit: f7c2c3024f1d5d82f483f291a9ce4584ff34ec38
---

{{AccessibilitySidebar}}

Das globale `aria-keyshortcuts`-Attribut zeigt an, welche Tastenkombinationen ein Autor zum Aktivieren oder Fokussieren eines Elements implementiert hat.

## Beschreibung

Eine Tastenkombination ist eine Serie von einer oder mehreren Tasten, die Software anweisen, eine vorprogrammierte Aktion auszuführen. Tastenkombinationen ermöglichen es Tastaturbenutzern, Befehle unter Verwendung der Tastatur auszuführen, die andernfalls den Zugriff auf ein Menü oder die Verwendung von Touch oder Maus erfordern würden. Das `aria-keyshortcuts`-Attribut definiert die Tastaturtasten, die implementiert wurden, um das Element, auf dem das Attribut gesetzt ist, zu aktivieren oder zu fokussieren.

Das `aria-keyshortcuts`-Attribut macht assistativer Technologie die Existenz der Tastenkombinationen zugänglich, sodass deren Vorhandensein den Benutzern mitgeteilt werden kann. Wie bei allen ARIA-Attributen hat es keinen Einfluss auf die Funktionalität der Seite; das Tastaturverhalten muss über JavaScript-Ereignisbehandler hinzugefügt werden.

Tastenkombinationen, die auf deaktivierte Elemente angewendet werden, sollten ebenfalls deaktiviert werden. Wenn Sie beispielsweise ein Element für Mausbenutzer deaktivieren, denken Sie daran, es auch für Tastenkombinationsbenutzer zu deaktivieren.

Stellen Sie sicher, dass alle Tastenkombinationen sowohl für sehende Benutzer sichtbar als auch für assistive Technologien zugänglich gemacht werden. Wenn Ihre Anwendung komplex genug ist, um Tastenkombinationen, auch als "Hotkeys" bekannt, zu benötigen, sollte eine geführte Tour durch Ihre Anwendung, eine Seite zur Barrierefreiheit, die Tastenkombinationen und andere Barrierefreiheitsmerkmale dokumentiert, ein Spickzettel für Tastenkombinationen oder ein Dialog-Popup oder eine andere Methode enthalten sein, um die Verfügbarkeit der Tastenkombinationen bekannt zu machen. Zeigen Sie darüber hinaus die Tastenkombination in Menüs und Tooltips an.

### Regeln für Eigenschaftswerte

Der Wert des `aria-keyshortcuts`-Attributs ist eine durch Leerzeichen getrennte Liste von Tastenkombinationen, die gedrückt werden können, um ein Kommando oder ein Textfeld-Widget zu aktivieren. Jede Tastenkombination enthält null, eine oder mehrere Modifikatortasten, gefolgt von genau einer Nicht-Modifikatortaste, die gleichzeitig gedrückt werden müssen und mit einem Pluszeichen ("+") verbunden sind. Der Attributwert ist nicht case-sensitive.

Beispiele für gültige Tastenkombinationen umfassen:

```plain
aria-keyshortcuts="A"
aria-keyshortcuts="Shift+Space"
aria-keyshortcuts="Control+Alt+."
aria-keyshortcuts="Control+Shift+&#39;"
aria-keyshortcuts="alt+shift+p control+f"
aria-keyshortcuts="Meta+C Meta+Shift+C"
```

Modifikatortasten sind Tasten, die allein verwendet keinen Effekt haben. Sie werden als "Alt", "Control", "Shift", "Meta" (Befehlstaste auf dem Mac) oder "AltGraph" (Optionstaste auf dem Mac) geschrieben.

Nicht-Modifikatortasten sind Tasten, die alleine verwendet einen Effekt haben, sei es das Drucken eines Zeichens, das Verschieben des Fokus oder das Erzeugen eines Tastaturereignisses. Nicht-Modifikatoren, die ein einzelnes Zeichen drucken, umfassen Zeichen wie `P`, `z` und `.`.

Da das Pluszeichen in Tastenkombinationen verwendet wird, wird es als `plus` geschrieben, wenn es als Nicht-Modifikator verwendet wird. Andere ausgeschriebene Nicht-Modifikatoren umfassen Leerzeichen `Space`, `Tab` und `Enter` sowie alle Zeichen, die zu Aktionen führen, wie `ArrowUp`, `PageUp` und `Escape`.

Wenn Sie einen Charakter verwenden möchten, der Probleme verursachen könnte, wie beispielsweise ein Anführungszeichen innerhalb von Anführungszeichen, maskieren Sie das Zeichen: `Control+&#39;`.

Modifikatortasten müssen in jeder Tastenkombination zuerst aufgeführt werden. Mögliche Tastenkombinationen umfassen `Control+P` oder `Shift+Space` und `Q`. Wenn die vollständige Tastenkombination alle drei dieser Kombinationen in der Reihenfolge erfordert, wird sie als `aria-keyshortcuts="Control+P Shift+Space Q"` geschrieben. Wenn eine Tastenkombination mehr als einen Modifikator enthält, spielt die Reihenfolge der Modifikatoren keine Rolle, aber sie müssen alle zuerst kommen, vor dem Nicht-Modifikator.

Diese beiden Attributdeklarationen sind gleichwertig.

```plain example-good
aria-keyshortcuts="Shift+Control+V"
aria-keyshortcuts="control+shift+v"
```

Beachten Sie, dass die Groß- und Kleinschreibung keine Rolle spielt. Aber die Reihenfolge des Nicht-Modifikators.

Diese beiden Attributdeklarationen sind ungültig, da der Nicht-Modifikator zuletzt sein muss.

```plain example-bad
aria-keyshortcuts="V+Shift+Control"
aria-keyshortcuts="V+Control+Shift"
```

Die aufgeführte Tastenkombination muss die Tasten sein, die der Benutzer drücken muss, nicht das Ergebnis der kombinierten Tastenanschläge. Beispielsweise auf einer US-Tastatur, wenn Sie das `@`-Symbol benötigen, wird die Tastenkombination als `"Shift+2"` geschrieben, nicht als `"@"` oder `"Shift+@"`.

### Beste Praktiken

Um die Zugänglichkeit Ihrer Websites und Anwendungen zu verbessern, gibt es einige bewährte Praktiken, denen Sie folgen sollten, um sicherzustellen, dass Ihre "Verbesserungen" die Benutzererfahrung nicht negativ beeinflussen. Denken Sie daran, dass kein ARIA besser ist als schlechtes ARIA.

#### Überschreiben Sie keine Tastenkombinationen des Browsers, assistiver Technologien oder des Betriebssystems

Wenn Sie Tastenkombinationen implementieren, stellen Sie sicher, dass Sie keine Tastenkombinationen erstellen, die bereits vom Browser, von assistiven Technologien oder vom Betriebssystem verwendet werden, es sei denn, sie werden für dasselbe verwendet. Zum Beispiel wird `"Control+P"` von den meisten Benutzeragenten verwendet, um Druckfunktionen zu starten. Im Allgemeinen sollte eine Webanwendung keine "Control+P"-Tastenkombination erstellen, da sie die Browsereigenschaft verdrängen würde. Es gibt Ausnahmen. Webanwendungen, bei denen das Drucken üblich ist, wie E-Mail-Anwendungen oder Dokumenteditoren, bei denen die Anwendungsspezifische Druckfunktion den Browserdruck ersetzen würde.

Es sei denn, Sie erstellen eine HTML-Version einer Produktivitätsanwendung, sollten Sie wahrscheinlich darauf verzichten, Tastenkombinationen zu implementieren. Während das Überschreiben einer Tastenkombination des Betriebssystems oder des Browsers für nicht-assistive Technologie-Benutzer ärgerlich sein kann, können Sie, wenn Sie die Tastaturfunktionalität eines Bildschirmlesers überschreiben, den Zugriff für assistive Technologie-Benutzer vollständig blockieren. Wenn Sie Tastenkombinationen erstellen müssen, vermeiden Sie Tastenkombinationen mit einzelnen Buchstaben und häufige Tastenkombinationen von Bildschirmlesern.

#### Berücksichtigen Sie Sprach- und Tastaturunterschiede

Berücksichtigen Sie die Vielfalt der verfügbaren Tastaturen und der verschiedenen Tastatursprachpräferenzen. Modifikatortasten werden häufig verwendet, um spracheigene häufig vorkommende Satzzeichen und Zahlenzeichen zu erstellen. Zum Beispiel verwenden Zahlen, wenn die Tastatursprachpräferenz auf Französisch (Frankreich) eingestellt ist, die Umschalttaste.

#### Verwenden Sie nicht stattdessen HTML

Das `aria-keyshortcuts`-Attribut ist dem [problematischen](https://webaim.org/techniques/keyboard/accesskey#spec) HTML-Attribut [`accesskey`](/de/docs/Web/HTML/Global_attributes#accesskey) sehr ähnlich, das für das aktuelle Element eine Tastenkombination erzeugt. Wenn ein `accesskey` für ein Element definiert ist, definiert der Browser die Modifikatoren und erledigt die gesamte Arbeit der Behandlung der Tastenkombination, ohne dass ein Skripting erforderlich ist. Jede Kombination aus Browser und Betriebssystem hat ihre eigenen Modifikatortasten für die im `accesskey`-Attribut festgelegten Nicht-Modifikatoren. Was für eine Kombination aus Betriebssystem, assistiver Technologie und Browser funktioniert, funktioniert möglicherweise nicht mit anderen Kombinationen. Bei `aria-keyshortcuts` sind die Modifikatortasten in der Attributwertliste der Tastenkombinationen enthalten und die Funktionalität muss geskriptet werden.

```html
<p>
  Press the
  <strong><u>S</u></strong
  >tress reliever to relax!
</p>
<button accesskey="s">Stress reliever</button>
```

In diesem Beispiel stellen wir sicher, dass die Anwesenheit der Tastenkombination auch sehenden Benutzern bekannt ist, indem wir das Nicht-Modifikator-Zeichen hervorheben.

Während das Ziel des `accesskey`-Attributs in der Absicht mit `aria-keyshortcuts` übereinstimmt und dies nativ zu tun, steckt `accesskey` voller Probleme. Wegen dieser Probleme wird allgemein geraten, Accesskeys für die meisten mittelgroßen Websites und Web-Apps nicht zu verwenden.

Zusätzlich zu der schlechten Browserunterstützung treten bei `accesskey` die gleichen Bedenken auf wie bei `aria-keyshortcuts`:

- Ein Accesskey-Wert kann mit einem System- oder Browser-Tastenkürzel oder der Funktionalität assistiver Technologien in Konflikt geraten.
- Bestimmte Zeichenwertesind möglicherweise auf bestimmten Tastaturen nicht vorhanden, insbesondere wenn Internationalisierung eine Rolle spielt. Die Anpassung an bestimmte Sprachen könnte daher weitere Probleme verursachen.
- Werte, die auf Zahlen beruhen, könnten für Personen, die kognitive Schwierigkeiten erleben, verwirrend sein, wenn die Zahl keine logische Verbindung zur Funktionalität hat, die sie auslöst.
- Den Benutzer darüber zu informieren, dass Tastenkombinationen vorhanden sind, damit sie sich der Funktionalität bewusst sind. Wenn das System keine Methode zur Benachrichtigung des Benutzers über diese Funktion hat, könnte der Benutzer versehentlich eine Tastenkombination auslösen.

## Werte

- `<string>`
  - : Die durch Leerzeichen getrennte Liste der Tastenkombinationen, die, wenn sie gedrückt werden, die Aktion ausführen.

## Beispiel

In diesem Beispiel ist das `aria-keyshortcuts`-Attribut am Element auf "Alt+Shift+A" gesetzt.

```html
<a href="#content" aria-keyshortcuts="Alt+Shift+A">Skip to content</a>
```

## Zugeordnete Schnittstellen

- [`Element.ariaKeyShortcuts`](/de/docs/Web/API/Element/ariaKeyShortcuts)
  - : Das [`ariaKeyShortcuts`](/de/docs/Web/API/Element/ariaKeyShortcuts)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-keyshortcuts`-Attributs wider.
- [`ElementInternals.ariaKeyShortcuts`](/de/docs/Web/API/ElementInternals/ariaKeyShortcuts)
  - : Das [`ariaKeyShortcuts`](/de/docs/Web/API/ElementInternals/ariaKeyShortcuts)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-keyshortcuts`-Attributs wider.

## Zugeordnete Rollen

Verwendet in **ALLEN** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Abschnitt [Tastenkombinationen](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#keyboardshortcuts) in den ARIA-Authoring-Praktiken
- HTML-Attribut [`accesskey`](/de/docs/Web/HTML/Global_attributes#accesskey)
- [Probleme mit `accesskey`](https://webaim.org/techniques/keyboard/accesskey#spec)
