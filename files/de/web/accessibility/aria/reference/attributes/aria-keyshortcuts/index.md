---
title: "ARIA: aria-keyshortcuts-Attribut"
short-title: aria-keyshortcuts
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Das globale `aria-keyshortcuts`-Attribut gibt Tastenkombinationen an, die ein Autor implementiert hat, um ein Element zu aktivieren oder den Fokus darauf zu setzen.

## Beschreibung

Eine Tastenkombination ist eine Serie von einem oder mehreren Tasten, die Software anweisen, eine vorprogrammierte Aktion auszuführen. Tastenkombinationen ermöglichen es Benutzern, Befehle über die Tastatur auszuführen, die ansonsten den Zugriff auf ein Menü oder die Nutzung von Touch oder einer Maus erfordern würden. Die `aria-keyshortcuts`-Eigenschaft definiert die Tasten auf der Tastatur, die implementiert wurden, um das Element, auf dem das Attribut gesetzt ist, zu aktivieren oder den Fokus darauf zu setzen.

Das `aria-keyshortcuts`-Attribut macht assistiven Technologien das Vorhandensein der Abkürzung bekannt, sodass die Existenz der Abkürzung den Benutzern mitgeteilt werden kann. Wie alle ARIA-Attribute hat es keine Auswirkungen auf die Funktionalität der Seite; das Tastaturverhalten muss über JavaScript-Event-Handler hinzugefügt werden.

Tastenkombinationen, die auf deaktivierte Elemente angewendet werden, sollten ebenfalls deaktiviert werden. Beispielsweise sollten Sie, wenn Sie ein Element für Mausbenutzer deaktivieren, daran denken, es auch für Benutzer von Tastenkombinationen zu deaktivieren.

Stellen Sie sicher, dass alle Tastenkombinationen sowohl für sehende Benutzer sichtbar sind als auch für assistive Technologien verfügbar gemacht werden. Wenn Ihre Anwendung komplex genug ist, um Tastenkombinationen zu benötigen, die auch als "Hot Keys" bekannt sind, sollten Sie eine geführte Tour durch Ihre Anwendung, eine Barrierefreiheitsseite mit der Dokumentation von Abkürzungen und anderen Barrierefreiheitsfunktionen, eine Abkürzungsübersichtseite oder ein Dialog-Pop-up oder eine andere Methode einfügen, um die Verfügbarkeit von Tastenkombinationen bekannt zu machen. Zeigen Sie die Abkürzung außerdem in Menüs und Tooltips an.

### Regeln für Eigenschaftswerte

Der Wert des `aria-keyshortcuts`-Attributs ist eine durch Leerzeichen getrennte Liste von Tastenkombinationen, die gedrückt werden können, um ein Kommando oder Textfeld-Widget zu aktivieren. Jede Tastenkombination umfasst null, eins oder mehrere Modifikatortasten, gefolgt von genau einer Nicht-Modifikatortaste, die gleichzeitig gedrückt werden müssen und mit einem Pluszeichen ("+") verbunden sind. Der Attributwert ist nicht case-sensitiv.

Beispiele für gültige Tastenkombinationen sind:

```plain
aria-keyshortcuts="A"
aria-keyshortcuts="Shift+Space"
aria-keyshortcuts="Control+Alt+."
aria-keyshortcuts="Control+Shift+&#39;"
aria-keyshortcuts="alt+shift+p control+f"
aria-keyshortcuts="Meta+C Meta+Shift+C"
```

Modifikatortasten sind Tasten, die alleine keine Auswirkungen haben. Sie werden als "Alt", "Control", "Shift", "Meta" (Befehlstaste auf Mac) oder "AltGraph" (Optionstaste auf Mac) geschrieben.

Nicht-Modifikatortasten sind Tasten, die allein verwendet Auswirkungen haben, sei es durch das Drucken eines Zeichens, das Bewegen des Fokus oder anderem Erzeugen eines Tastaturereignisses bei Verwendung. Nicht-Modifikatoren, die ein einzelnes Zeichen drucken, schließen Zeichen wie `P`, `z` und `.` ein.

Da das Pluszeichen beim Schreiben von Tastenkombinationen verwendet wird, wird es als `plus` geschrieben, wenn es als Nicht-Modifikator verwendet wird. Andere ausgeschriebene Nicht-Modifikatoren schließen Leerzeichenzeichen `Space`, `Tab` und `Enter` sowie alle Zeichen ein, die Aktionen auslösen, wie `ArrowUp`, `PageUp` und `Escape`.

Wenn Sie ein Zeichen verwenden möchten, das Probleme verursachen könnte, wie ein Anführungszeichen innerhalb von Anführungszeichen, entziehen Sie das Zeichen: `Control+&#39;`.

Modifikatortasten müssen in jeder Tastenkombination zuerst aufgeführt werden. Mögliche Tastenkombinationen umfassen `Control+P` oder `Shift+Space` und `Q`. Wenn der vollständige Shortcut alle drei dieser Kombinationen erfordert, würde er als `aria-keyshortcuts="Control+P Shift+Space Q"` geschrieben. Wenn eine Tastenkombination mehr als eine Modifikatortaste enthält, spielt die Reihenfolge der Modifikatoren keine Rolle, aber sie müssen alle zuerst kommen, vor dem Nicht-Modifikator.

Diese zwei Attributdeklarationen sind gleichwertig.

```plain example-good
aria-keyshortcuts="Shift+Control+V"
aria-keyshortcuts="control+shift+v"
```

Beachten Sie, dass Groß- und Kleinschreibung keine Rolle spielen. Aber die Reihenfolge des Nicht-Modifikators tut es.

Diese zwei Attributdeklarationen sind ungültig, da der Nicht-Modifikator zuletzt sein muss.

```plain example-bad
aria-keyshortcuts="V+Shift+Control"
aria-keyshortcuts="V+Control+Shift"
```

Die aufgelistete Tastenkombination muss die Tasten sein, die der Benutzer drücken muss, nicht das Ergebnis der kombinierten Tastenanschläge. Zum Beispiel, auf einer amerikanischen Tastatur, wenn Sie das Symbol `@` benötigen, wird die Tastenkombination als `"Shift+2"` geschrieben, nicht als `"@"` oder `"Shift+@"`.

### Beste Praktiken

Beim Versuch, die Barrierefreiheit Ihrer Websites und Anwendungen zu verbessern, gibt es einige beste Praktiken, die sicherstellen sollen, dass Ihre "Verbesserungen" das Benutzererlebnis nicht negativ beeinträchtigen. Denken Sie daran, kein ARIA ist besser als schlechtes ARIA.

#### Übersteuern Sie keine Abkürzungen von Browsern, assistiver Technologie oder Betriebssystemen

Wenn Sie Tastenkombinationen implementieren, stellen Sie sicher, dass Sie keine Abkürzungen erstellen, die bereits vom Browser, der assistiven Technologie oder dem Betriebssystem verwendet werden, es sei denn, sie werden für dasselbe verwendet. Zum Beispiel wird `"Control+P"` von den meisten Benutzeragenten verwendet, um die Druckfunktion zu starten. Im Allgemeinen sollte eine Webanwendung keinen "Control+P"-Shortcut erstellen, da dies die Browserfunktionalität überlagern würde. Es gibt Ausnahmen. Webanwendungen, bei denen das Drucken häufig ist, wie E-Mail-Anwendungen oder Dokumenteditoren, könnten dafür bekannt sein, die Druckfunktion des Browsers `"Control+P"` für einen anwendungsspezifischen Druckflow zu nutzen.

Es sei denn, Sie erstellen eine HTML-Version einer Produktivitätsanwendung, sollten Sie es wahrscheinlich vermeiden, Tastenkombinationen zu implementieren. Während das Übersteuern einer Betriebssystem- oder Browser-Tastenkombination für Nicht-Nutzerassistenztechnologie lästig sein kann, könnten Sie bei Übersteuerung einer Bildschirmleser-Tastaturfunktionalität den Zugriff für den Nutzerassistenztechnologie komplett stoppen. Wenn Sie Tastenkombinationen erstellen müssen, vermeiden Sie einzelne Buchstabentastenkombinationen und häufige Bildschirmlesertastenkombinationen.

#### Berücksichtigen Sie Sprach- und Tastaturunterschiede

Berücksichtigen Sie die Vielfalt der verfügbaren Tastaturen und die verschiedenen Tastaturspracheneinstellungen. Modifikatortasten werden oft verwendet, um sprachspezifische allgemeine Interpunktionszeichen und Zahlenzeichen zu erstellen. Zum Beispiel verwenden Zahlen, wenn die Tastaturspracheneinstellung auf Französisch (Frankreich) gesetzt ist, die Umschalttaste.

#### Verwenden Sie nicht stattdessen HTML

Das `aria-keyshortcuts`-Attribut ist dem [problematischen](https://webaim.org/techniques/keyboard/accesskey#spec) HTML-Attribut [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey) sehr ähnlich, das für das aktuelle Element eine Tastenkombination generiert. Wenn für ein Element ein `accesskey` definiert ist, definiert der Browser die Modifikatortasten und übernimmt die gesamte Arbeit der Abkürzungsverarbeitung ohne Skripting. Jede Browser- und Betriebssystemkombination hat ihre eigenen Modifikatortasten für den im `accesskey`-Attribut gesetzten Nicht-Modifikator. Was für eine Kombination aus Betriebssystem, assistiver Technologie und Browser funktioniert, funktioniert möglicherweise nicht mit anderen Kombinationen. Bei `aria-keyshortcuts` sind die Modifikatortasten in der Attributwertliste der Tastenkombinationen enthalten und die Funktionalität muss geskriptet werden.

```html
<p>
  Press the
  <strong><u>S</u></strong
  >tress reliever to relax!
</p>
<button accesskey="s">Stress reliever</button>
```

In diesem Beispiel haben wir sichergestellt, dass die Anwesenheit der Abkürzung auch sehenden Benutzern bekannt war, indem wir das Nicht-Modifikatorzeichen hervorgehoben haben.

Obwohl das Ziel des `accesskey`-Attributs mit der Absicht von `aria-keyshortcuts` übereinstimmt und dies nativ tut, ist `accesskey` mit Problemen behaftet. Aufgrund dieser Probleme wird im Allgemeinen empfohlen, auf den Einsatz von Accesskeys für die meisten allgemeinen Websites und Webanwendungen zu verzichten.

Zusätzlich zur schlechten Browserunterstützung treten bei `accesskey` die gleichen Bedenken auf wie bei `aria-keyshortcuts`:

- Ein Accesskey-Wert kann mit einer System- oder Browser-Tastenkombination oder einer assistiven Technologie überlappen.
- Bestimmte Schlüsselwerte sind möglicherweise nicht auf bestimmten Tastaturen vorhanden, insbesondere wenn Internationalisierung ein Anliegen ist. Daher könnte die Anpassung an bestimmte Sprachen weitere Probleme verursachen.
- Werte, die auf Zahlen beruhen, können für Personen verwirrend sein, die kognitive Einschränkungen erleben, bei denen die Nummer keine logische Assoziation mit der Funktionalität hat, die sie auslöst.
- Wenn Benutzer darüber informiert werden müssen, dass Abkürzungen vorhanden sind, damit sie sich der Funktionalität bewusst sind. Wenn dem System eine Methode fehlt, den Benutzer über diese Funktion zu informieren, könnte der Benutzer eine Abkürzung versehentlich aktivieren.

## Werte

- `<string>`
  - : Die durch Leerzeichen getrennte Liste von Tastenkombinationen, die, wenn sie gedrückt werden, die Aktion ausführen.

## Beispiel

In diesem Beispiel ist das `aria-keyshortcuts`-Attribut des Elements auf "Alt+Shift+A" gesetzt.

```html
<a href="#content" aria-keyshortcuts="Alt+Shift+A">Skip to content</a>
```

## Zugehörige Schnittstellen

- [`Element.ariaKeyShortcuts`](/de/docs/Web/API/Element/ariaKeyShortcuts)
  - : Die [`ariaKeyShortcuts`](/de/docs/Web/API/Element/ariaKeyShortcuts)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-keyshortcuts`-Attributs wider.
- [`ElementInternals.ariaKeyShortcuts`](/de/docs/Web/API/ElementInternals/ariaKeyShortcuts)
  - : Die [`ariaKeyShortcuts`](/de/docs/Web/API/ElementInternals/ariaKeyShortcuts)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-keyshortcuts`-Attributs wider.

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Abschnitt [Tastenkombinationen](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#keyboardshortcuts) in den ARIA Authoring Practices
- HTML-Attribut [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey)
- [Probleme mit `accesskey`](https://webaim.org/techniques/keyboard/accesskey#spec)
