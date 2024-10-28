---
title: aria-keyshortcuts
slug: Web/Accessibility/ARIA/Attributes/aria-keyshortcuts
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{AccessibilitySidebar}}

Das globale `aria-keyshortcuts`-Attribut gibt an, welche Tastenkombinationen ein Autor implementiert hat, um ein Element zu aktivieren oder den Fokus darauf zu setzen.

## Beschreibung

Eine Tastenkombination ist eine Serie von einem oder mehreren Tastenanschlägen, die der Software mitteilt, eine vorprogrammierte Aktion auszuführen. Tastenkombinationen ermöglichen es Nutzern, Befehle über die Tastatur auszuführen, die sonst den Zugriff auf ein Menü oder die Nutzung von Touch oder Maus erfordern würden. Die `aria-keyshortcuts`-Eigenschaft definiert die Tasten, die implementiert wurden, um das Element, auf dem das Attribut gesetzt ist, zu aktivieren oder den Fokus darauf zu setzen.

Das `aria-keyshortcuts`-Attribut macht unterstützenden Technologien die Existenz der Abkürzung bekannt, sodass das Vorhandensein der Abkürzung den Nutzern mitgeteilt werden kann. Wie alle ARIA-Attribute hat es keinen Einfluss auf die Funktionalität der Seite; das Verhalten der Tastatur muss über JavaScript-Ereignishandler hinzugefügt werden.

An deaktivierte Elemente angehängte Tastenkombinationen sollten ebenfalls deaktiviert sein. Wenn Sie beispielsweise ein Element für Mausbenutzer deaktivieren, denken Sie daran, es auch für Nutzer von Tastenkombinationen zu deaktivieren.

Stellen Sie sicher, dass alle Tastenkombinationen sowohl für sehende Nutzer sichtbar als auch für unterstützende Technologie zugänglich sind. Wenn Ihre Anwendung komplex genug ist, um Tastenkombinationen, auch bekannt als "Hotkeys", zu benötigen, bieten Sie eine geführte Tour durch Ihre Anwendung, eine Seite zur Barrierefreiheit mit Dokumentation zu Tastenkombinationen und anderen Barrierefreiheitsmerkmalen, eine Kurzbefehlsübersicht oder eine andere Methode an, um die Verfügbarkeit der Tastenkombinationen bekannt zu machen. Zeigen Sie die Abkürzung außerdem in Menüs und Tooltips an.

### Regeln für Attributwerte

Der Wert des `aria-keyshortcuts`-Attributs ist eine durch Leerzeichen getrennte Liste von Tastenkombinationen, die gedrückt werden können, um ein Befehl- oder Texteingabe-Widget zu aktivieren. Jede Tastenkombination beinhaltet null, eine oder mehrere Modifikator-Tasten, gefolgt von genau einer Nicht-Modifikator-Taste, die gleichzeitig gedrückt werden müssen, verbunden durch ein Pluszeichen ("+"). Der Attributwert ist nicht zwischen Groß- und Kleinschreibung unterscheidend.

Beispiele für gültige Tastenkombinationen umfassen:

```plain
aria-keyshortcuts="A"
aria-keyshortcuts="Shift+Space"
aria-keyshortcuts="Control+Alt+."
aria-keyshortcuts="Control+Shift+&#39;"
aria-keyshortcuts="alt+shift+p control+f"
aria-keyshortcuts="Meta+C Meta+Shift+C"
```

Modifikator-Tasten sind Tasten, die keinen Effekt haben, wenn sie alleine verwendet werden. Sie werden als "Alt", "Control", "Shift", "Meta" (Befehlstaste auf dem Mac) oder "AltGraph" (Optionstaste auf dem Mac) geschrieben.

Nicht-Modifikator-Tasten sind Tasten, die allein verwendet einen Effekt haben, sei es, ein Zeichen zu drucken, den Fokus zu verschieben oder anderweitig ein Tastaturereignis auszulösen. Zu den Nicht-Modifikatoren, die ein einzelnes Zeichen drucken, gehören Zeichen wie `P`, `z` und `.`.

Da das Pluszeichen in der Darstellung von Tastenkombinationen verwendet wird, wird es als `plus` geschrieben, wenn es als Nicht-Modifikator verwendet wird. Weitere ausgeschriebene Nicht-Modifikatoren umfassen Leerzeichen `Space`, `Tab` und `Enter`, und alle Zeichen, die Aktionen verursachen, wie `ArrowUp`, `PageUp` und `Escape`.

Wenn Sie ein Zeichen verwenden möchten, das zu Problemen führen könnte, wie ein Anführungszeichen innerhalb von Anführungszeichen, z.B. `Control+&#39;`, escapen Sie das Zeichen.

Modifikator-Tasten müssen zuerst in jeder Tastenkombination aufgelistet werden. Mögliche Tastenkombinationen umfassen `Control+P` oder `Shift+Space` und `Q`. Wenn die vollständige Abkürzung alle drei dieser Kombinationen erfordert, würde sie als `aria-keyshortcuts="Control+P Shift+Space Q"` geschrieben. Wenn eine Tastenkombination mehr als eine Modifikator-Taste enthält, spielt die Reihenfolge der Modifikatoren keine Rolle, aber sie müssen alle zuerst kommen, vor dem Nicht-Modifikator.

Diese beiden Attributdeklarationen sind gleichwertig.

```plain example-good
aria-keyshortcuts="Shift+Control+V"
aria-keyshortcuts="control+shift+v"
```

Beachten Sie, dass die Groß-/Kleinschreibung keine Rolle spielt. Aber die Reihenfolge des Nicht-Modifikators tut es.

Diese beiden Attributdeklarationen sind ungültig, weil der Nicht-Modifikator zuletzt stehen muss.

```plain example-bad
aria-keyshortcuts="V+Shift+Control"
aria-keyshortcuts="V+Control+Shift"
```

Die aufgelistete Tastenkombination muss die Tasten sein, die der Benutzer drücken muss, nicht das Ergebnis der kombinierten Tastenschläge. Zum Beispiel, bei einem US-amerikanischen Keyboard, wenn Sie das `@`-Symbol benötigen, wird die Tastenkombination als `"Shift+2"` geschrieben, nicht `"@"` oder `"Shift+@"`.

### Beste Praktiken

Um die Barrierefreiheit Ihrer Seiten und Anwendungen zu verbessern, gibt es einige Best Practices, die sicherstellen, dass Ihre "Verbesserungen" die Benutzererfahrung nicht negativ beeinflussen. Denken Sie daran, kein ARIA ist besser als schlechtes ARIA.

#### Überschreiben Sie keine Tastenkombinationen des Browsers, unterstützender Technologie oder des Betriebssystems

Wenn Sie Tastenkombinationen implementieren, stellen Sie sicher, dass Sie keine Abkürzungen erstellen, die bereits vom Browser, der unterstützenden Technologie oder dem Betriebssystem verwendet werden, es sei denn, sie werden für dieselbe Funktion genutzt. Zum Beispiel wird `"Control+P"` von den meisten Benutzeragenten verwendet, um die Druckfunktion zu starten. In der Regel sollte eine Webanwendung kein "Control+P"-Abkürzung erstellen, da dies die Browserfunktionalität überschreibt. Es gibt Ausnahmen. Webanwendungen, bei denen das Drucken häufig vorkommt, wie E-Mail-Anwendungen oder Dokumenteditoren, würden erwarten, dass die Druckfunktionalität des Browsers `"Control+P"` für einen anwendungsspezifischen Druckfluss überschrieben wird.

Es sei denn, Sie erstellen eine HTML-Version einer Produktivitätsanwendung, sollten Sie wahrscheinlich darauf verzichten, Tastenkombinationen zu implementieren. Während das Überschreiben einer Tastenkombination des Betriebssystems oder Browsers für nicht unterstützende Technologiekunden ärgerlich sein kann, können Sie, wenn Sie die Tastaturfunktionalität eines Bildschirmlesers überschreiben, den Zugang für den Benutzer der unterstützenden Technologie komplett blockieren. Wenn Sie Tastenkombinationen erstellen müssen, vermeiden Sie Einzeltastenabkürzungen und häufige Tastenkombinationen von Bildschirmlesern.

#### Berücksichtigen Sie Sprach- und Tastaturunterschiede

Berücksichtigen Sie die Vielfalt der verfügbaren Tastaturen und der verschiedenen Tastaturlandeseinstellungen. Modifikatortasten werden oft verwendet, um sprachspezifische gebräuchliche Satzzeichen und Zahlensymbole zu erstellen. Beispielsweise verwenden Zahlen, wenn die Tastatursprache auf Französisch (Frankreich) gesetzt ist, die Umschalttaste.

#### Verwenden Sie nicht stattdessen HTML

Das `aria-keyshortcuts`-Attribut ist dem [problematischen](https://webaim.org/techniques/keyboard/accesskey#spec) HTML-`accesskey`-Attribut ähnlich, das eine Tastenkombination für das aktuelle Element generiert. Wenn für ein Element ein `accesskey` definiert ist, legt der Browser die Modifikatortasten fest und übernimmt die Verarbeitung der Tastenkombination ohne Skripting. Jede Kombination aus Browser und Betriebssystem hat eigene Modificatortasten für den im `accesskey`-Attribut festgelegten Nicht-Modifikator. Was für eine Kombination aus Betriebssystem, unterstützender Technologie und Browser funktioniert, funktioniert möglicherweise nicht mit anderen Kombinationen. Bei `aria-keyshortcuts` sind die Modifikatortasten in der Attributwertliste der Tastenkombinationen enthalten und die Funktionalität muss geskriptet werden.

```html
<p>
  Press the
  <strong><u>S</u></strong
  >tress reliever to relax!
</p>
<button accesskey="s">Stress reliever</button>
```

In diesem Beispiel haben wir dafür gesorgt, dass das Vorhandensein der Abkürzung auch sehenden Nutzern bekannt war, indem wir den Nicht-Modifikator-Zeichen hervorgehoben haben.

Während das Ziel des `accesskey`-Attributs mit der Absicht von `aria-keyshortcuts` übereinstimmt und dies nativ zu tun, ist `accesskey` mit Problemen behaftet. Aufgrund dieser Probleme wird allgemein darauf hingewiesen, Access-Keys für die meisten allgemeinen Websites und Web-Apps nicht zu verwenden.

Zusätzlich zur schlechten Browserunterstützung treten die gleichen Bedenken bei `accesskey` auf wie bei `aria-keyshortcuts`:

- Ein `accesskey`-Wert kann mit einem System- oder Browserkurzbefehl oder der Funktionalität der unterstützenden Technologie in Konflikt geraten.
- Bestimmte Tastaturwerte sind möglicherweise auf bestimmten Tastaturen nicht vorhanden, insbesondere wenn die Internationalisierung ein Anliegen ist. Die Anpassung an bestimmte Sprachen könnte daher weitere Probleme verursachen.
- Werte, die auf Zahlen beruhen, können für Personen mit kognitiven Einschränkungen verwirrend sein, bei denen die Zahl keine logische Verbindung mit der ausgelösten Funktionalität hat.
- Der Benutzer muss darüber informiert werden, dass Abkürzungen vorhanden sind, damit er sich der Funktionalität bewusst ist. Wenn das System keine Methode hat, den Benutzer über dieses Feature zu informieren, könnte der Benutzer versehentlich eine Abkürzung aktivieren.

## Werte

- `<string>`
  - : Die durch Leerzeichen getrennte Liste von Tastenkombinationen, die, wenn gedrückt, die Aktion ausführen.

## Beispiel

In diesem Beispiel ist das `aria-keyshortcuts`-Attribut auf dem Element auf "Alt+Shift+A" gesetzt.

```html
<a href="#content" aria-keyshortcuts="Alt+Shift+A">Skip to content</a>
```

## Zugehörige Schnittstellen

- [`Element.ariaKeyShortcuts`](/de/docs/Web/API/Element/ariaKeyShortcuts)
  - : Die [`ariaKeyShortcuts`](/de/docs/Web/API/Element/ariaKeyShortcuts)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-keyshortcuts`-Attributs wider.
- [`ElementInternals.ariaKeyShortcuts`](/de/docs/Web/API/ElementInternals/ariaKeyShortcuts)
  - : Die [`ariaKeyShortcuts`](/de/docs/Web/API/ElementInternals/ariaKeyShortcuts)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/Element/ariaKeyShortcuts)-Schnittstelle, spiegelt den Wert des `aria-keyshortcuts`-Attributs wider.

## Zugehörige Rollen

In **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Abschnitt [Tastenkombinationen](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#keyboardshortcuts) in den ARIA-Autorenpraktiken
- HTML-`accesskey`-Attribut
- [Probleme mit `accesskey`](https://webaim.org/techniques/keyboard/accesskey#spec)
