---
title: aria-keyshortcuts
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Das globale Attribut `aria-keyshortcuts` gibt Tastenkombinationen an, die ein Autor implementiert hat, um ein Element zu aktivieren oder den Fokus darauf zu setzen.

## Beschreibung

Eine Tastenkombination ist eine Abfolge von einer oder mehreren Tasten, die der Software sagt, eine vorprogrammierte Aktion auszuführen. Tastenkombinationen ermöglichen es Tastaturbenutzern, Befehle über die Tastatur auszuführen, die ansonsten den Zugriff auf ein Menü oder die Verwendung von Touch oder Maus erfordern würden. Die Eigenschaft `aria-keyshortcuts` definiert die Tasten der Tastatur, die implementiert wurden, um das Element zu aktivieren oder den Fokus darauf zu setzen, auf dem das Attribut gesetzt ist.

Das Attribut `aria-keyshortcuts` macht assistiven Technologien das Vorhandensein der Tastenkombination bekannt, sodass deren Existenz den Benutzern mitgeteilt werden kann. Wie alle ARIA-Attribute hat es keinen Einfluss auf die Funktionalität der Seite; das Tastaturverhalten muss über JavaScript-Event-Handler hinzugefügt werden.

Tastenkombinationen, die auf deaktivierte Elemente angewendet werden, sollten ebenfalls deaktiviert werden. Wenn Sie beispielsweise ein Element für Mausnutzer deaktivieren, denken Sie daran, es auch für Benutzer von Tastenkombinationen zu deaktivieren.

Stellen Sie sicher, dass alle Tastenkombinationen sowohl für sehende Benutzer sichtbar als auch für assistive Technologien verfügbar gemacht werden. Wenn Ihre Anwendung komplex genug ist, um Tastenkombinationen, auch bekannt als "Hot Keys", zu benötigen, bieten Sie eine geführte Tour durch Ihre Anwendung, eine Barrierefreiheitsseite, die Tastenkombinationen und andere Barrierefreiheitsfunktionen dokumentiert, eine Seite mit einer Übersicht der Tastenkombinationen oder einen Dialog-Pop-up an, oder eine andere Methode, um die Verfügbarkeit der Tastenkombinationen bekannt zu machen. Zeigen Sie die Tastenkombinationen zusätzlich in Menüs und Tooltips an.

### Regeln für Attributwerte

Der Wert des Attributs `aria-keyshortcuts` ist eine durch Leerzeichen getrennte Liste von Tastenkombinationen, die gedrückt werden können, um ein Kommando oder ein Textfeld-Widget zu aktivieren. Jede Tastenkombination enthält null, eine oder mehrere Modifikatortasten, gefolgt von genau einer Nicht-Modifikatortaste, die gleichzeitig gedrückt werden müssen und mit einem Pluszeichen ("+") verbunden sind. Der Attributwert ist nicht abhängig von der Groß- und Kleinschreibung.

Gültige Beispiele für Tastenkombinationen sind:

```plain
aria-keyshortcuts="A"
aria-keyshortcuts="Shift+Space"
aria-keyshortcuts="Control+Alt+."
aria-keyshortcuts="Control+Shift+&#39;"
aria-keyshortcuts="alt+shift+p control+f"
aria-keyshortcuts="Meta+C Meta+Shift+C"
```

Modifikatortasten sind Tasten, die alleine keine Auswirkungen haben. Sie werden als "Alt", "Control", "Shift", "Meta" (Befehlstaste auf Mac) oder "AltGraph" (Optionstaste auf Mac) geschrieben.

Nicht-Modifikatortasten sind Tasten, die alleine Auswirkungen haben, sei es, ein Zeichen zu drucken, den Fokus zu verschieben oder anderweitig ein Tastaturevent zu erzeugen. Nicht-Modifikatoren, die ein einzelnes Zeichen drucken, sind Zeichen wie `P`, `z` und `.`.

Da das Pluszeichen zum Schreiben von Tastenkombinationen verwendet wird, wird es als `plus` geschrieben, wenn es als Nicht-Modifikator verwendet wird. Andere ausgeschriebene Nicht-Modifikatoren umfassen Leerzeichentasten `Space`, `Tab` und `Enter` sowie alle Zeichen, die Aktionen auslösen, wie `ArrowUp`, `PageUp` und `Escape`.

Wenn Sie ein Zeichen verwenden möchten, das Probleme verursachen könnte, wie ein Anführungszeichen innerhalb von Anführungszeichen, escapen Sie das Zeichen: `Control+&#39;`.

Modifikatortasten müssen in jeder Tastenkombination zuerst aufgeführt werden. Mögliche Tastenkombinationen umfassen `Control+P` oder `Shift+Space` und `Q`. Wenn die vollständige Tastenkombination alle drei dieser Kombinationen erfordert, würde sie als `aria-keyshortcuts="Control+P Shift+Space Q"` geschrieben werden. Wenn eine Tastenkombination mehr als eine Modifikatortaste beinhaltet, spielt die Reihenfolge der Modifikatoren keine Rolle, aber sie müssen alle zuerst kommen, bevor der Nicht-Modifikator.

Diese beiden Attributdeklarationen sind gleichwertig.

```plain example-good
aria-keyshortcuts="Shift+Control+V"
aria-keyshortcuts="control+shift+v"
```

Beachten Sie, dass die Groß- und Kleinschreibung keine Rolle spielt. Aber die Reihenfolge der Nicht-Modifikatoren schon.

Diese beiden Attributdeklarationen sind ungültig, da der Nicht-Modifikator zuletzt stehen muss.

```plain example-bad
aria-keyshortcuts="V+Shift+Control"
aria-keyshortcuts="V+Control+Shift"
```

Die angegebene Tastenkombination muss die Tasten sein, die der Benutzer drücken muss, nicht das Ergebnis der kombinierten Tastenanschläge. Auf einer US-Tastatur, wenn Sie das `@`-Symbol benötigen, wird die Tastenkombination als `"Shift+2"` geschrieben, nicht als `"@"` oder `"Shift+@"`.

### Beste Praktiken

Beim Versuch, die Barrierefreiheit Ihrer Websites und Anwendungen zu verbessern, gibt es einige bewährte Praktiken, um sicherzustellen, dass Ihre "Verbesserungen" die Benutzererfahrung nicht negativ beeinträchtigen. Denken Sie daran, dass kein ARIA besser ist als schlechtes ARIA.

#### Überschreiben Sie nicht die Tastenkombinationen von Browsern, assistiven Technologien oder Betriebssystemen

Beim Implementieren von Tastenkombinationen stellen Sie sicher, dass Sie keine Tastenkombinationen erstellen, die bereits vom Browser, von assistiven Technologien oder vom Betriebssystem verwendet werden, es sei denn, sie werden für dasselbe genutzt. Beispielsweise wird `"Control+P"` von den meisten User-Agents verwendet, um die Druckfunktion zu starten. Im Allgemeinen sollte eine Webanwendung keine `"Control+P"`-Tastenkombination erstellen, da dies die Funktionalität des Browsers übersteuern würde. Es gibt Ausnahmen. Webanwendungen, bei denen das Drucken häufig ist, wie E-Mail-Anwendungen oder Dokumenten-Editoren, würde man erwarten, dass sie die Druckfunktion des Browsers `"Control+P"` für einen anwendungsspezifischen Druckablauf überschreiben.

Solange Sie nicht eine HTML-Version einer Produktivitätsanwendung erstellen, sollten Sie wahrscheinlich vermeiden, Tastenkombinationen zu implementieren. Das Überschreiben einer Betriebssystem- oder Browser-Tastenkombination kann für Benutzer ohne assistive Technologie ärgerlich sein; wenn Sie jedoch die Tastaturfunktionalität eines Screenreaders überschreiben, können Sie den Zugang für Benutzer von assistiven Technologien vollständig blockieren. Wenn Sie Tastenkombinationen erstellen müssen, vermeiden Sie kurze Tastenkombinationen mit einzelnen Buchstaben und gängige Tastenkombinationen des Screenreaders.

#### Berücksichtigen Sie Sprach- und Tastaturunterschiede

Berücksichtigen Sie die Vielfalt der verfügbaren Tastaturen und die verschiedenen Tastaturspracheinstellungen. Modifikatortasten werden oft verwendet, um sprachspezifische allgemeine Satzzeichen und Nummernzeichen zu erstellen. Beispielsweise verwenden Zahlen, wenn die Tastatursprache auf Französisch (Frankreich) eingestellt ist, die Shifttaste.

#### Verwenden Sie nicht stattdessen HTML

Das Attribut `aria-keyshortcuts` ist dem [problematischen](https://webaim.org/techniques/keyboard/accesskey#spec) HTML-Attribut [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey) sehr ähnlich, das eine Tastenkombination für das aktuelle Element erzeugt. Wenn ein `accesskey` für ein Element definiert ist, legt der Browser die Modifikatortasten fest und übernimmt die gesamte Verarbeitung der Tastenkombination ohne Skripting. Jede Kombination von Browser und Betriebssystem hat ihre eigenen Modifikatortasten für den Nicht-Modifikator, der im `accesskey`-Attribut festgelegt ist. Was für eine Kombination aus Betriebssystem, assistiver Technologie und Browser funktioniert, funktioniert möglicherweise nicht mit anderen Kombinationen. Bei `aria-keyshortcuts` sind die Modifikatortasten in der Attributwertliste der Tastenkombinationen enthalten und die Funktionalität muss geskriptet werden.

```html
<p>
  Press the
  <strong><u>S</u></strong
  >tress reliever to relax!
</p>
<button accesskey="s">Stress reliever</button>
```

In diesem Beispiel haben wir sichergestellt, dass das Vorhandensein der Tastenkombination auch den sehenden Benutzern bekannt ist, indem wir das Nicht-Modifikatzeichen hervorgehoben haben.

Obwohl das Ziel des `accesskey`-Attributs der Absicht von `aria-keyshortcuts` entspricht und dies auf native Weise tun soll, ist `accesskey` mit Problemen behaftet. Aufgrund dieser Probleme wird im Allgemeinen davon abgeraten, Zugriffstasten für die meisten allgemeinen Websites und Webanwendungen zu nutzen.

Zusätzlich zu schlechter Browser-Unterstützung treten bei `accesskey` die gleichen Probleme auf wie bei `aria-keyshortcuts`:

- Ein `accesskey`-Wert kann mit einer Tastenkombination des Systems oder Browsers oder der Funktionalität der assistiven Technologie in Konflikt stehen.
- Bestimmte Tastenkombinationen sind möglicherweise auf bestimmten Tastaturen nicht vorhanden, insbesondere wenn Internationalisierung ein Thema ist. Die Anpassung an spezifische Sprachen könnte zusätzliche Probleme verursachen.
- Werte, die auf Zahlen basieren, können für Personen, die kognitive Schwierigkeiten haben, verwirrend sein, da die Zahl möglicherweise keine logische Verbindung mit der ausgelösten Funktionalität hat.
- Den Benutzer darauf hinzuweisen, dass Tastenkombinationen vorhanden sind, damit er sich ihrer Funktionalität bewusst ist. Wenn das System keine Methode bietet, den Benutzer über diese Funktion zu informieren, könnte der Benutzer versehentlich eine Tastenkombination aktivieren.

## Werte

- `<string>`
  - : Die durch Leerzeichen getrennte Liste von Tastenkombinationen, die gedrückt werden, um die Aktion auszuführen.

## Beispiel

In diesem Beispiel ist das Attribut `aria-keyshortcuts` auf dem Element auf "Alt+Shift+A" gesetzt.

```html
<a href="#content" aria-keyshortcuts="Alt+Shift+A">Skip to content</a>
```

## Zugehörige Schnittstellen

- [`Element.ariaKeyShortcuts`](/de/docs/Web/API/Element/ariaKeyShortcuts)
  - : Die [`ariaKeyShortcuts`](/de/docs/Web/API/Element/ariaKeyShortcuts)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des Attributs `aria-keyshortcuts` wider.
- [`ElementInternals.ariaKeyShortcuts`](/de/docs/Web/API/ElementInternals/ariaKeyShortcuts)
  - : Die [`ariaKeyShortcuts`](/de/docs/Web/API/ElementInternals/ariaKeyShortcuts)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des Attributs `aria-keyshortcuts` wider.

## Zugehörige Rollen

Verwendet in **ALLEN** Rollen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Abschnitt [Tastenkombinationen](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#keyboardshortcuts) in den ARIA-Autorierungspraktiken
- HTML-Attribut [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey)
- [Probleme mit `accesskey`](https://webaim.org/techniques/keyboard/accesskey#spec)
