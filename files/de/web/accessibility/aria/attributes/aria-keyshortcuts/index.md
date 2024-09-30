---
title: aria-keyshortcuts
slug: Web/Accessibility/ARIA/Attributes/aria-keyshortcuts
l10n:
  sourceCommit: f7c2c3024f1d5d82f483f291a9ce4584ff34ec38
---

{{AccessibilitySidebar}}

Das globale `aria-keyshortcuts`-Attribut gibt Tastenkombinationen an, die ein Autor implementiert hat, um ein Element zu aktivieren oder den Fokus darauf zu legen.

## Beschreibung

Eine Tastenkombination ist eine Abfolge von einer oder mehreren Tasten, die Software anweist, eine vorprogrammierte Aktion auszuführen. Tastenkombinationen ermöglichen es Tastaturbenutzern, Befehle über die Tastatur auszuführen, die ansonsten den Zugriff auf ein Menü oder die Verwendung von Touch oder Maus erfordern würden. Die `aria-keyshortcuts`-Eigenschaft definiert die Tasten, die implementiert wurden, um das Element, auf dem das Attribut festgelegt ist, zu aktivieren oder den Fokus darauf zu legen.

Das `aria-keyshortcuts`-Attribut zeigt das Vorhandensein der Abkürzung für assistive Technologien an, sodass die Existenz der Abkürzung ihren Benutzern mitgeteilt werden kann. Wie alle ARIA-Attribute hat es keine Auswirkungen auf die Funktionalität der Seite; das Tastaturverhalten muss über JavaScript-Ereignishandler hinzugefügt werden.

Auf deaktivierte Elemente angewendete Tastenkombinationen sollten ebenfalls deaktiviert werden. Wenn Sie beispielsweise ein Element für Mausbenutzer deaktivieren, denken Sie daran, es auch für Benutzer von Tastenkombinationen zu deaktivieren.

Stellen Sie sicher, dass alle Tastenkombinationen sowohl für sehende Benutzer sichtbar als auch assistiven Technologien zugänglich gemacht werden. Wenn Ihre Anwendung komplex genug ist, um Tastenkombinationen, auch als "Hotkeys" bekannt, zu benötigen, fügen Sie eine geführte Tour durch Ihre Anwendung hinzu, eine Barrierefreiheitsseite, die Abkürzungen und andere Barrierefreiheitsmerkmale dokumentiert, eine Kurzbefehlsübersicht als Seite oder Dialogfeld oder eine andere Methode, um die Verfügbarkeit von Tastenkombinationen bekannt zu machen. Darüber hinaus zeigen Sie die Abkürzung in Menüs und Tooltips an.

### Regeln für Attributswerte

Der Wert des `aria-keyshortcuts`-Attributs ist eine durch Leerzeichen getrennte Liste von Tastenkombinationen, die gedrückt werden können, um ein Kommando oder ein Textfeld-Widget zu aktivieren. Jede Tastenkombination enthält null, eine oder mehrere Modifikatortasten gefolgt von genau einer Nicht-Modifikatortaste, die gleichzeitig gedrückt werden muss, verbunden mit einem Pluszeichen ("+"). Der Attributwert ist nicht zwischen Groß- und Kleinschreibung unterschieden.

Beispiele für gültige Tastenkombinationen sind:

```plain
aria-keyshortcuts="A"
aria-keyshortcuts="Shift+Space"
aria-keyshortcuts="Control+Alt+."
aria-keyshortcuts="Control+Shift+&#39;"
aria-keyshortcuts="alt+shift+p control+f"
aria-keyshortcuts="Meta+C Meta+Shift+C"
```

Modifikatortasten sind Tasten, die alleine verwendet keinen Effekt haben. Sie werden als "Alt", "Control", "Shift", "Meta" (Befehlstaste auf Mac) oder "AltGraph" (Optionstaste auf Mac) geschrieben.

Nicht-Modifikatortasten sind Tasten, die alleine verwendet einen Effekt haben, sei es, ein Zeichen zu drucken, den Fokus zu verschieben oder anderweitig ein Tastaturereignis zu erzeugen, wenn sie verwendet werden. Nicht-Modifikatoren, die ein einzelnes Zeichen drucken, umfassen Zeichen wie `P`, `z` und `.`.

Da das Pluszeichen beim Schreiben von Tastenkombinationen verwendet wird, wird es als `plus` geschrieben, wenn es als Nicht-Modifikator verwendet wird. Andere ausgeschriebene Nicht-Modifikatoren umfassen Leerzeichenzeichen `Space`, `Tab` und `Enter` und alle Zeichen, die Aktionen hervorrufen, wie `ArrowUp`, `PageUp` und `Escape`.

Wenn Sie ein Zeichen verwenden möchten, das Probleme verursachen könnte, wie ein Anführungszeichen innerhalb von Anführungszeichen, entkommen Sie dem Zeichen: `Control+&#39;`.

Modifikatortasten müssen in jeder Tastenkombination zuerst aufgeführt werden. Mögliche Tastenkombinationen sind `Control+P` oder `Shift+Space` und `Q`. Wenn die vollständige Abkürzung alle drei dieser Kombinationen in dieser Reihenfolge erfordert, würde sie als `aria-keyshortcuts="Control+P Shift+Space Q"` geschrieben. Wenn eine Tastenkombination mehr als eine Modifikatortaste enthält, spielt die Reihenfolge der Modifikatoren keine Rolle, aber sie müssen alle zuerst kommen, vor dem Nicht-Modifikator.

Diese beiden Attributsdeklarationen sind gleichwertig.

```plain example-good
aria-keyshortcuts="Shift+Control+V"
aria-keyshortcuts="control+shift+v"
```

Beachten Sie, dass die Textgröße keine Rolle spielt. Aber die Reihenfolge der Nicht-Modifikatoren schon.

Diese beiden Attributsdeklarationen sind ungültig, da der Nicht-Modifikator zuletzt sein muss.

```plain example-bad
aria-keyshortcuts="V+Shift+Control"
aria-keyshortcuts="V+Control+Shift"
```

Die angegebene Tastenkombination müssen die Tasten sein, die der Benutzer drücken muss, nicht das Ergebnis der kombinierten Tastenanschläge. Zum Beispiel muss auf einer USA-Tastatur, wenn Sie das `@`-Symbol benötigen, die Tastenkombination als `"Shift+2"` geschrieben werden, nicht als `"@"` oder `"Shift+@"`.

### Beste Praktiken

Beim Versuch, die Barrierefreiheit Ihrer Websites und Anwendungen zu verbessern, gibt es einige bewährte Verfahren, denen Sie folgen sollten, um sicherzustellen, dass Ihre "Verbesserungen" das Benutzererlebnis nicht negativ beeinflussen. Denken Sie daran, kein ARIA ist besser als schlechtes ARIA.

#### Überschreiben Sie keine Abkürzungen des Browsers, der assistiven Technologie oder des Betriebssystems

Wenn Sie Tastenkombinationen implementieren, stellen Sie sicher, dass Sie keine Abkürzungen erstellen, die bereits vom Browser, von assistiven Technologien oder vom Betriebssystem verwendet werden, es sei denn, sie werden für dasselbe verwendet. Beispielsweise wird `"Control+P"` von den meisten User-Agents verwendet, um die Druckfunktion zu initiieren. Im Allgemeinen sollte eine Webanwendung keine "Control+P"-Abkürzung erstellen, da sie die Browserfunktionalität übernehmen würde. Es gibt Ausnahmen. Web-Anwendungen, bei denen Drucken häufig vorkommt, wie E-Mail-Anwendungen oder Dokumenteneditoren, wird erwartet, dass sie die Druckfunktionalität des Browsers `"Control+P"` für eine anwendungsspezifische Druckabfolge übernehmen.

Es sei denn, Sie erstellen eine HTML-Version einer Produktivitätsanwendung, sollten Sie wahrscheinlich die Implementierung von Tastenkombinationen vermeiden. Während das Überschreiben einer Tastenkombination des Betriebssystems oder Browsers für nicht-unterstützende Technologiebenutzer ärgerlich sein kann, können Sie, wenn Sie die Tastaturfunktionalität eines Screenreaders überschreiben, den Zugang für den Benutzer der unterstützenden Technologie vollständig blockieren. Wenn Sie Tastenkombinationen erstellen müssen, vermeiden Sie Einzeltastenabkürzungen und übliche Screenreader-Tastenkombinationen.

#### Berücksichtigen Sie Sprach- und Tastaturunterschiede

Berücksichtigen Sie die Vielfalt der verfügbaren Tastaturen und die verschiedenen Tastatursprachenpräferenzen. Modifikatortasten werden häufig verwendet, um sprachspezifische allgemeine Satzzeichen und Zahlenzeichen zu erstellen. Zum Beispiel verwenden Zahlen, wenn die Tastatursprache auf Französisch (Frankreich) eingestellt ist, die Umschalttaste.

#### Verwenden Sie nicht HTML stattdessen

Das `aria-keyshortcuts`-Attribut ist dem [problematischen](https://webaim.org/techniques/keyboard/accesskey#spec) HTML-Attribut [`accesskey`](/de/docs/Web/HTML/Global_attributes#accesskey) sehr ähnlich, das eine Tastenkombination für das aktuelle Element generiert. Wenn ein `accesskey` für ein Element definiert ist, definiert der Browser die Modifikatoren und übernimmt die gesamte Verarbeitung der Abkürzung ohne erforderliches Skripting. Jede Kombination aus Browser und Betriebssystem hat ihre eigenen Modifikatortasten für den Nicht-Modifikator, die im `accesskey`-Attribut festgelegt sind. Was für eine Kombination aus Betriebssystem, assistiver Technologie und Browser funktioniert, funktioniert möglicherweise nicht für andere Kombinationen. Mit `aria-keyshortcuts` sind die Modifikatortasten in der Attributwertliste der Tastenkombinationen enthalten und die Funktionalität muss geskriptet werden.

```html
<p>
  Press the
  <strong><u>S</u></strong
  >tress reliever to relax!
</p>
<button accesskey="s">Stress reliever</button>
```

In diesem Beispiel haben wir sichergestellt, dass die Anwesenheit der Abkürzung auch sehenden Benutzern bekannt gemacht wurde, indem das Nicht-Modifikatzeichen hervorgehoben wurde.

Während das Ziel des `accesskey`-Attributs dem Zweck von `aria-keyshortcuts` entspricht und dies nativ tun soll, ist `accesskey` voller Probleme. Aufgrund dieser Probleme wird generell davon abgeraten, Accesskeys für die meisten allgemeinen Websites und Webanwendungen zu verwenden.

Zusätzlich zu schlechter Browserunterstützung treten dieselben Bedenken für `accesskey` auf wie für `aria-keyshortcuts`:

- Ein Accesskey-Wert kann mit einem System- oder Browser-Tastaturkurzbefehl oder der Funktionalität der assistiven Technologie in Konflikt geraten.
- Bestimmte Tastenwerte sind möglicherweise nicht auf bestimmten Tastaturen vorhanden, insbesondere wenn Internationalisierung eine Rolle spielt. Die Anpassung an bestimmte Sprachen könnte daher zusätzliche Probleme verursachen.
- Werte, die sich auf Zahlen stützen, können für Personen mit kognitiven Beeinträchtigungen verwirrend sein, wenn die Nummer keine logische Verbindung zur Funktion hat, die sie auslöst.
- Den Benutzer darüber informieren, dass Abkürzungen vorhanden sind, damit er sich der Funktionalität bewusst ist. Wenn das System keine Möglichkeit bietet, den Benutzer über diese Funktion zu informieren, könnte der Benutzer versehentlich eine Abkürzung auslösen.

## Werte

- `<string>`
  - : Die durch Leerzeichen getrennte Liste von Tastenkombinationen, die, wenn sie gedrückt werden, die Aktion auslösen.

## Beispiel

In diesem Beispiel ist das `aria-keyshortcuts`-Attribut auf dem Element auf "Alt+Shift+A" gesetzt.

```html
<a href="#content" aria-keyshortcuts="Alt+Shift+A">Skip to content</a>
```

## Zugehörige Schnittstellen

- [`Element.ariaKeyShortcuts`](/de/docs/Web/API/Element/ariaKeyShortcuts)
  - : Die [`ariaKeyShortcuts`](/de/docs/Web/API/Element/ariaKeyShortcuts)-Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element)-Schnittstelle, spiegelt den Wert des `aria-keyshortcuts`-Attributs wider.
- [`ElementInternals.ariaKeyShortcuts`](/de/docs/Web/API/ElementInternals/ariaKeyShortcuts)
  - : Die [`ariaKeyShortcuts`](/de/docs/Web/API/ElementInternals/ariaKeyShortcuts)-Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals)-Schnittstelle, spiegelt den Wert des `aria-keyshortcuts`-Attributs wider.

## Zugehörige Rollen

Wird in **ALLE** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Tastenkombinationen](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#keyboardshortcuts) Abschnitt in ARIA-Authoring-Practices
- HTML [`accesskey`](/de/docs/Web/HTML/Global_attributes#accesskey)-Attribut
- [Probleme mit `accesskey`](https://webaim.org/techniques/keyboard/accesskey#spec)
