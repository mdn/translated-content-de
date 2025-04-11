---
title: aria-keyshortcuts
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das globale `aria-keyshortcuts`-Attribut zeigt Tastenkombinationen an, die ein Autor implementiert hat, um ein Element zu aktivieren oder den Fokus darauf zu legen.

## Beschreibung

Eine Tastenkombination ist eine Serie von einer oder mehreren Tasten, die der Software mitteilen, eine vorprogrammierte Aktion auszuführen. Tastenkombinationen ermöglichen es Tastaturnutzern, Befehle über die Tastatur auszuführen, die sonst den Zugriff auf ein Menü, die Verwendung von Touch oder einer Maus erfordern würden. Die `aria-keyshortcuts`-Eigenschaft definiert die Tasten, die zur Aktivierung oder Fokussierung des Elements, auf dem das Attribut gesetzt ist, implementiert wurden.

Das `aria-keyshortcuts`-Attribut macht das Vorhandensein der Tastenkombination für unterstützende Technologien sichtbar, sodass die Anwesenheit der Tastenkombination den Nutzern mitgeteilt werden kann. Wie alle ARIA-Attribute hat es keine Auswirkungen auf die Funktionalität der Seite; das Tastaturverhalten muss über JavaScript-Ereignishandler hinzugefügt werden.

Tastenkombinationen, die auf deaktivierte Elemente angewendet werden, sollten ebenfalls deaktiviert werden. Zum Beispiel, wenn ein Element für Mausnutzer deaktiviert wird, denken Sie daran, es auch für Nutzer von Tastenkombinationen zu deaktivieren.

Stellen Sie sicher, dass alle Tastenkombinationen sowohl für sehende Nutzer sichtbar sind als auch für unterstützende Technologien verfügbar gemacht werden. Wenn Ihre Anwendung komplex genug ist, um Tastenkombinationen, auch bekannt als "Hotkeys", zu benötigen, enthalten Sie eine geführte Tour durch Ihre Anwendung, eine Zugänglichkeitsseite, die Tastenkombinationen und andere Zugänglichkeitsfunktionen dokumentiert, eine Tastenkombinationsübersicht oder ein Dialogfenster oder eine andere Methode, um die Verfügbarkeit von Tastenkombinationen bekannt zu machen. Darüber hinaus zeigen Sie die Tastenkombination in Menüs und Tooltips an.

### Regeln für den Eigenschaftswert

Der Wert des `aria-keyshortcuts`-Attributs ist eine durch Leerzeichen getrennte Liste von Tastenkombinationen, die gedrückt werden können, um ein Kommando oder Textbox-Widget zu aktivieren. Jede Tastenkombination beinhaltet null, eine oder mehrere Modifikatortasten gefolgt von genau einer Nicht-Modifikatortaste, die gleichzeitig gedrückt werden muss, verbunden mit einem Pluszeichen ("+"). Der Attributwert ist nicht groß- und kleinschreibungsabhängig.

Beispiele für gültige Tastenkombinationen sind:

```plain
aria-keyshortcuts="A"
aria-keyshortcuts="Shift+Space"
aria-keyshortcuts="Control+Alt+."
aria-keyshortcuts="Control+Shift+&#39;"
aria-keyshortcuts="alt+shift+p control+f"
aria-keyshortcuts="Meta+C Meta+Shift+C"
```

Modifikatortasten sind Tasten, die allein verwendet keinen Einfluss haben. Sie werden als "Alt", "Control", "Shift", "Meta" (Befehlstaste auf dem Mac) oder "AltGraph" (Optionstaste auf dem Mac) geschrieben.

Nicht-Modifikatortasten sind Tasten, die beim alleinigen Gebrauch einen Einfluss haben, sei es, um ein Zeichen zu drucken, den Fokus zu verschieben oder auf andere Weise ein Tastaturereignis zu erzeugen. Nicht-Modifikatoren, die ein einzelnes Zeichen drucken, umfassen Zeichen wie `P`, `z` und `.`.

Da das Pluszeichen in Tastenkombinationen verwendet wird, wird es als `plus` geschrieben, wenn es als Nicht-Modifikator verwendet wird. Andere ausgeschriebene Nicht-Modifikatoren umfassen Leerzeichen-Zeichen wie `Space`, `Tab` und `Enter`, sowie alle Zeichen, die zu Aktionen führen, wie `ArrowUp`, `PageUp` und `Escape`.

Wenn Sie ein Zeichen verwenden möchten, das Probleme verursachen könnte, wie ein Anführungszeichen innerhalb von Anführungszeichen, escapen Sie das Zeichen: `Control+&#39;`.

Modifikatortasten müssen in jeder Tastenkombination zuerst gelistet werden. Mögliche Tastenkombinationen sind `Control+P` oder `Shift+Space` und `Q`. Wenn die vollständige Tastenkombination alle drei dieser Kombinationen erfordert, wäre sie als `aria-keyshortcuts="Control+P Shift+Space Q"` geschrieben. Wenn eine Tastenkombination mehr als eine Modifikatortaste enthält, spielt die Reihenfolge der Modifikatoren keine Rolle, aber alle müssen zuerst kommen, noch vor dem Nicht-Modifikator.

Diese beiden Attributdeklarationen sind gleichwertig.

```plain example-good
aria-keyshortcuts="Shift+Control+V"
aria-keyshortcuts="control+shift+v"
```

Beachten Sie, dass die Groß- und Kleinschreibung keine Rolle spielt. Aber die Reihenfolge der Nicht-Modifikatoren.

Diese beiden Attributdeklarationen sind ungültig, da der Nicht-Modifikator zuletzt sein muss.

```plain example-bad
aria-keyshortcuts="V+Shift+Control"
aria-keyshortcuts="V+Control+Shift"
```

Die angegebene Tastenkombination muss die Tasten sein, die der Benutzer drücken muss, nicht das Ergebnis der kombinierten Tastendrücke. Zum Beispiel, auf einer USA-Tastatur, wenn Sie das `@`-Symbol benötigen, wird die Tastenkombination als `"Shift+2"` geschrieben, nicht `"@"` noch `"Shift+@"`.

### Beste Praktiken

Beim Versuch, die Barrierefreiheit Ihrer Websites und Anwendungen zu verbessern, gibt es einige bewährte Praktiken, die Sie befolgen sollten, um sicherzustellen, dass Ihre "Verbesserungen" die Benutzererfahrung nicht negativ beeinflussen. Denken Sie daran, keine ARIA ist besser als schlechte ARIA.

#### Überschreiben Sie keine Tastenkombinationen des Browsers, der unterstützenden Technologie oder des Betriebssystems

Stellen Sie bei der Implementierung von Tastenkombinationen sicher, dass Sie keine Tastenkombinationen erstellen, die bereits vom Browser, von unterstützenden Technologien oder vom Betriebssystem verwendet werden, es sei denn, sie werden für denselben Zweck verwendet. Zum Beispiel wird `"Control+P"` von den meisten User-Agents verwendet, um Druckfunktionen zu initiieren. Eine Webanwendung sollte im Allgemeinen keine "Control+P"-Tastenkombination erstellen, da dies die Browserfunktionalität entziehen würde. Es gibt Ausnahmen. Webanwendungen, bei denen das Drucken häufig ist, wie E-Mail-Anwendungen oder Dokumenteneditoren, würde man erwarten, dass sie die Druckfunktionalität des Browsers durch eine anwendungsspezifische Druckablauf ersetzen.

Sofern Sie nicht eine HTML-Version einer Produktivitätsanwendung erstellen, sollten Sie die Implementierung von Tastenkombinationen wahrscheinlich vermeiden. Während das Überschreiben einer Tastenkombination des Betriebssystems oder Browsers für nicht-unterstützungsbedürftige Benutzer ärgerlich sein kann, kann das Überschreiben der Tastaturfunktionalität eines Screenreaders den Zugang für den Nutzer der unterstützenden Technologie vollständig blockieren. Wenn Sie Tastenkombinationen erstellen müssen, vermeiden Sie einstellige Buchstabenkombinationen und gängige Tastenkombinationen für Screenreader.

#### Berücksichtigen Sie Sprach- und Tastaturunterschiede

Berücksichtigen Sie die Vielfalt verfügbarer Tastaturen und die verschiedenen Tastatursprachpräferenzen. Modifikatortasten werden häufig verwendet, um sprachspezifische häufige Satzzeichensymbole und Zahlenzeichen zu erzeugen. Zum Beispiel verwenden Zahlen, wenn die Tastatursprachpräferenz auf Französisch (Frankreich) eingestellt ist, die Umschalttaste.

#### Verwenden Sie nicht HTML stattdessen

Das `aria-keyshortcuts`-Attribut ist dem [problematischen](https://webaim.org/techniques/keyboard/accesskey#spec) HTML-Attribut [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey) sehr ähnlich, das eine Tastenkombination für das aktuelle Element generiert. Wenn ein `accesskey` für ein Element definiert ist, legt der Browser die Modifikatoren fest und erledigt die gesamte Arbeit des Handlings der Tastenkombination ohne Skripting. Jede Kombination von Browser und Betriebssystem hat ihre eigenen Modifikatortasten für den im `accesskey`-Attribut gesetzten Nicht-Modifikator. Was für eine Kombination aus Betriebssystem, unterstützender Technologie und Browser funktionieren kann, funktioniert möglicherweise nicht mit anderen Kombinationen. Mit `aria-keyshortcuts` sind die Modifikatortasten in der Liste der Tastenkombinationen im Attributwert enthalten und die Funktionalität muss gescriptet werden.

```html
<p>
  Press the
  <strong><u>S</u></strong
  >tress reliever to relax!
</p>
<button accesskey="s">Stress reliever</button>
```

In diesem Beispiel haben wir auch sicher gestellt, dass das Vorhandensein der Tastenkombination für sehende Nutzer bekannt war, indem wir das Nicht-Modifikator-Zeichen hervorgehoben haben.

Während das Ziel des `accesskey`-Attributs die Intention von `aria-keyshortcuts` und dies nativ zu tun, übereinstimmt, ist `accesskey` mit Problemen behaftet. Aufgrund dieser Probleme wird im Allgemeinen davon abgeraten, Zugangsschlüssel für die meisten Websites und Web-Apps für allgemeine Zwecke zu verwenden.

Zusätzlich zu schlechter Browser-Unterstützung entstehen die gleichen Bedenken für `accesskey` wie bei `aria-keyshortcuts`:

- Ein Accesskey-Wert kann mit einer System- oder Browser-Tastenkombination oder der Funktionalität einer assistiven Technologie in Konflikt stehen.
- Bestimmte Tastenwerte können auf bestimmten Tastaturen nicht vorhanden sein, besonders wenn Internationalisierung eine Rolle spielt. Die Anpassung an spezifische Sprachen könnte weitere Probleme verursachen.
- Werte, die auf Zahlen basieren, könnten für Personen verwirrend sein, die kognitive Bedenken haben, da die Zahl keine logische Verbindung zur Funktionalität hat, die sie auslöst.
- Den Benutzer darüber zu informieren, dass Tastenkombinationen vorhanden sind, sodass er sich der Funktionalität bewusst ist. Wenn das System keine Methode hat, den Benutzer über diese Funktion zu informieren, könnte der Benutzer versehentlich eine Tastenkombination aktivieren.

## Werte

- `<string>`
  - : Die durch Leerzeichen getrennte Liste von Tastenkombinationen, die beim Drücken die Aktion ausführen.

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

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Tastenkombinationen](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#keyboardshortcuts) Abschnitt in den ARIA-Autorenpraktiken
- HTML-Attribut [`accesskey`](/de/docs/Web/HTML/Reference/Global_attributes/accesskey)
- [Probleme mit `accesskey`](https://webaim.org/techniques/keyboard/accesskey#spec)
