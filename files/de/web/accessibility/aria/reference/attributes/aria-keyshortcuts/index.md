---
title: "ARIA: aria-keyshortcuts-Attribut"
short-title: aria-keyshortcuts
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts
l10n:
  sourceCommit: d9e522ed63f204df4b9ab3ed6c8208ce089fa868
---

Das globale Attribut `aria-keyshortcuts` gibt Tastenkombinationen an, die ein Autor implementiert hat, um ein Element zu aktivieren oder ihm den Fokus zu geben.

## Beschreibung

Eine Tastenkombination besteht aus einer oder mehreren Tasten, mit denen eine Software angewiesen wird, eine vorprogrammierte Aktion auszuführen. Tastenkombinationen ermöglichen es Personen, die eine Tastatur verwenden, Befehle auszuführen, für die sie sonst ein Menü, eine Touch-Bedienung oder eine Maus benötigen würden. Die Eigenschaft `aria-keyshortcuts` definiert die Tasten, mit denen das Element, für das das Attribut gesetzt ist, aktiviert wird oder den Fokus erhält.

Das Attribut `aria-keyshortcuts` macht assistiven Technologien bekannt, dass eine Tastenkombination vorhanden ist, damit sie ihre Benutzer darüber informieren können. Wie alle ARIA-Attribute hat es keine Auswirkungen auf die Funktionalität der Seite; das Tastaturverhalten muss über JavaScript-Event-Handler hinzugefügt werden.

Tastenkombinationen für deaktivierte Elemente sollten ebenfalls deaktiviert werden. Wenn Sie beispielsweise ein Element für Personen deaktivieren, die eine Maus verwenden, denken Sie daran, es auch für Personen zu deaktivieren, die Tastenkombinationen verwenden.

Stellen Sie sicher, dass alle Tastenkombinationen für sehende Personen sichtbar und für assistive Technologien verfügbar sind. Wenn Ihre Anwendung komplex genug ist, um Tastenkombinationen – auch „Hotkeys“ genannt – zu benötigen, bieten Sie eine geführte Einführung in Ihre Anwendung, eine Seite zur Barrierefreiheit mit einer Dokumentation der Tastenkombinationen und anderer Barrierefreiheitsfunktionen, eine Übersichtsseite oder ein Dialogfenster mit Tastenkombinationen oder eine andere Möglichkeit an, auf die verfügbaren Tastenkombinationen hinzuweisen. Zeigen Sie die Tastenkombinationen außerdem in Menüs und Tooltips an.

### Regeln für den Eigenschaftswert

Der Wert des Attributs `aria-keyshortcuts` ist eine durch Leerzeichen getrennte Liste von Tastenkombinationen, mit denen ein Befehl oder ein Textfeld-Widget aktiviert werden kann. Jede Tastenkombination besteht aus null, einer oder mehreren Modifikatortasten, gefolgt von genau einer anderen Taste. Diese Tasten werden gleichzeitig gedrückt und in der Angabe durch ein Pluszeichen („+“) verbunden. Beim Attributwert wird nicht zwischen Groß- und Kleinschreibung unterschieden.

Beispiele für gültige Tastenkombinationen:

```plain
aria-keyshortcuts="A"
aria-keyshortcuts="Shift+Space"
aria-keyshortcuts="Control+Alt+."
aria-keyshortcuts="Control+Shift+&#39;"
aria-keyshortcuts="alt+shift+p control+f"
aria-keyshortcuts="Meta+C Meta+Shift+C"
```

Modifikatortasten sind Tasten, die allein keine Wirkung haben. Sie werden als „Alt“, „Control“, „Shift“, „Meta“ (Befehlstaste auf dem Mac) oder „AltGraph“ (Wahltaste auf dem Mac) angegeben.

Andere Tasten als Modifikatortasten haben auch allein eine Wirkung: Sie geben beispielsweise ein Zeichen ein, verschieben den Fokus oder lösen auf andere Weise ein Tastaturereignis aus. Zu den Tasten, die ein einzelnes Zeichen eingeben, gehören beispielsweise `P`, `z` und `.`.

Da das Pluszeichen zum Notieren von Tastenkombinationen verwendet wird, wird es als `plus` angegeben, wenn es selbst die zu drückende Taste ist. Weitere ausgeschriebene Tastenbezeichnungen sind `Space`, `Tab` und `Enter` für Leerraumzeichen sowie Bezeichnungen für Tasten, die Aktionen auslösen, etwa `ArrowUp`, `PageUp` und `Escape`.

Wenn Sie ein Zeichen verwenden möchten, das Probleme verursachen könnte, beispielsweise ein doppeltes Anführungszeichen innerhalb doppelter Anführungszeichen, maskieren Sie das Zeichen: `Control+&#39;`.

Modifikatortasten müssen in jeder Tastenkombination zuerst aufgeführt werden. Mögliche Tastenkombinationen sind `Control+P`, `Shift+Space` und `Q`. Wenn die vollständige Tastenkürzelabfolge alle drei Kombinationen in dieser Reihenfolge erfordert, wird sie als `aria-keyshortcuts="Control+P Shift+Space Q"` angegeben. Enthält eine Tastenkombination mehrere Modifikatortasten, ist deren Reihenfolge unerheblich; sie müssen jedoch alle vor der anderen Taste stehen.

Diese beiden Attributdeklarationen sind gleichwertig.

```plain example-good
aria-keyshortcuts="Shift+Control+V"
aria-keyshortcuts="control+shift+v"
```

Beachten Sie, dass die Groß- und Kleinschreibung keine Rolle spielt. Die Reihenfolge von Modifikator- und anderen Tasten spielt dagegen eine Rolle.

Diese beiden Attributdeklarationen sind ungültig, da die Taste, die keine Modifikatortaste ist, zuletzt stehen muss.

```plain example-bad
aria-keyshortcuts="V+Shift+Control"
aria-keyshortcuts="V+Control+Shift"
```

Die angegebene Tastenkombination muss die Tasten wiedergeben, die Benutzer tatsächlich drücken müssen, nicht das Ergebnis dieser Tastenanschläge. Wenn Sie beispielsweise auf einer US-amerikanischen Tastatur das Symbol `@` eingeben möchten, wird die Tastenkombination als `"Shift+2"` angegeben, nicht als `"@"` oder `"Shift+@"`.

### Bewährte Vorgehensweisen

Wenn Sie die Barrierefreiheit Ihrer Websites und Anwendungen verbessern möchten, sollten Sie einige bewährte Vorgehensweisen beachten, damit sich Ihre „Verbesserungen“ nicht negativ auf die Benutzererfahrung auswirken. Denken Sie daran: Kein ARIA ist besser als schlechtes ARIA.

#### Überschreiben Sie keine Tastenkombinationen von Browsern, assistiven Technologien oder Betriebssystemen

Achten Sie bei der Implementierung von Tastenkombinationen darauf, keine Kombinationen zu verwenden, die bereits vom Browser, von assistiven Technologien oder vom Betriebssystem genutzt werden – es sei denn, sie dienen demselben Zweck. Beispielsweise verwenden die meisten User-Agents `"Control+P"`, um die Druckfunktion aufzurufen. Im Allgemeinen sollte eine Webanwendung keine Tastenkombination „Control+P“ festlegen, da sie damit die Browserfunktion verdrängen würde. Es gibt Ausnahmen: Bei Webanwendungen, in denen häufig gedruckt wird, etwa E-Mail-Anwendungen oder Dokumenteditoren, kann es sinnvoll sein, die Druckfunktion des Browsers unter `"Control+P"` durch einen anwendungsspezifischen Druckablauf zu ersetzen.

Wenn Sie keine HTML-Version einer Produktivitätsanwendung erstellen, sollten Sie wahrscheinlich auf die Implementierung von Tastenkombinationen verzichten. Das Überschreiben einer Tastenkombination des Betriebssystems oder Browsers kann für Personen, die keine assistiven Technologien verwenden, lästig sein. Überschreiben Sie jedoch eine Tastaturfunktion eines Screenreaders, können Sie Personen, die auf diese assistive Technologie angewiesen sind, den Zugriff vollständig verwehren. Wenn Sie Tastenkombinationen erstellen müssen, vermeiden Sie Kombinationen aus einzelnen Buchstaben sowie gängige Tastenkombinationen von Screenreadern.

#### Berücksichtigen Sie Unterschiede zwischen Sprachen und Tastaturen

Berücksichtigen Sie die Vielfalt verfügbarer Tastaturen und die unterschiedlichen Tastaturspracheneinstellungen. Modifikatortasten werden häufig verwendet, um sprachspezifische, gebräuchliche Satzzeichen und Ziffern einzugeben. Bei einer Tastatur mit der Spracheinstellung Französisch (Frankreich) wird beispielsweise die Umschalttaste benötigt, um Ziffern einzugeben.

#### Verwenden Sie stattdessen nicht HTML

Das Attribut `aria-keyshortcuts` ähnelt dem [problematischen](https://webaim.org/techniques/keyboard/accesskey#spec) HTML-Attribut [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey), das eine Tastenkombination für das jeweilige Element erzeugt. Wenn für ein Element ein `accesskey` definiert ist, legt der Browser die Modifikatortasten fest und übernimmt die gesamte Verarbeitung der Tastenkombination, ohne dass dafür Skripte erforderlich sind. Jede Kombination aus Browser und Betriebssystem verwendet eigene Modifikatortasten für die im Attribut `accesskey` angegebene andere Taste. Was mit einer Kombination aus Betriebssystem, assistiver Technologie und Browser funktioniert, muss mit anderen Kombinationen nicht funktionieren. Bei `aria-keyshortcuts` sind die Modifikatortasten in der Liste der Tastenkombinationen im Attributwert enthalten, und die Funktionalität muss per Skript implementiert werden.

```html
<p>
  Press the
  <strong><u>S</u></strong
  >tress reliever to relax!
</p>
<button accesskey="s">Stress reliever</button>
```

In diesem Beispiel haben wir dafür gesorgt, dass auch sehende Personen auf die Tastenkombination aufmerksam werden, indem wir die Taste hervorgehoben haben, die keine Modifikatortaste ist.

Das Attribut `accesskey` verfolgt zwar dasselbe Ziel wie `aria-keyshortcuts` und soll dies mit nativen Mitteln erreichen, ist aber mit zahlreichen Problemen verbunden. Daher wird für die meisten allgemeinen Websites und Webanwendungen davon abgeraten, Zugriffstasten zu verwenden.

Neben der mangelhaften Browserunterstützung bestehen bei `accesskey` dieselben Bedenken wie bei `aria-keyshortcuts`:

- Ein `accesskey`-Wert kann mit einer Tastenkombination des Systems oder Browsers oder mit einer Funktion assistiver Technologien in Konflikt geraten.
- Bestimmte Tasten sind möglicherweise nicht auf allen Tastaturen vorhanden, insbesondere im internationalen Kontext. Eine Anpassung an bestimmte Sprachen kann daher weitere Probleme verursachen.
- Werte, die auf Zahlen beruhen, können für Menschen mit kognitiven Einschränkungen verwirrend sein, wenn zwischen der Zahl und der ausgelösten Funktion kein logischer Zusammenhang besteht.
- Benutzer müssen darüber informiert werden, dass Tastenkombinationen vorhanden sind, damit sie diese Funktion kennen. Wenn das System keine Möglichkeit bietet, auf diese Funktion hinzuweisen, könnten Benutzer versehentlich eine Tastenkombination auslösen.

## Werte

- `<string>`
  - : Die durch Leerzeichen getrennte Liste von Tastenkombinationen, die beim Drücken die Aktion ausführen.

## Zugehörige Schnittstellen

- [`Element.ariaKeyShortcuts`](/de/docs/Web/API/Element/ariaKeyShortcuts)
  - : Die Eigenschaft [`ariaKeyShortcuts`](/de/docs/Web/API/Element/ariaKeyShortcuts) der Schnittstelle [`Element`](/de/docs/Web/API/Element) spiegelt den Wert des Attributs `aria-keyshortcuts` wider.
- [`ElementInternals.ariaKeyShortcuts`](/de/docs/Web/API/ElementInternals/ariaKeyShortcuts)
  - : Die Eigenschaft [`ariaKeyShortcuts`](/de/docs/Web/API/ElementInternals/ariaKeyShortcuts) der Schnittstelle [`ElementInternals`](/de/docs/Web/API/ElementInternals) spiegelt den Wert des Attributs `aria-keyshortcuts` wider.

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Beispiel

In diesem Beispiel ist das Attribut `aria-keyshortcuts` des Elements auf „Alt+Shift+A“ gesetzt.

```html
<a href="#content" aria-keyshortcuts="Alt+Shift+A">Skip to content</a>
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- Abschnitt [Tastenkombinationen](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#keyboardshortcuts) in den ARIA Authoring Practices
- HTML-Attribut [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey)
- [Probleme mit `accesskey`](https://webaim.org/techniques/keyboard/accesskey#spec)
