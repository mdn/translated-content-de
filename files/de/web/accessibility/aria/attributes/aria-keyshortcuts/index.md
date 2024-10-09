---
title: aria-keyshortcuts
slug: Web/Accessibility/ARIA/Attributes/aria-keyshortcuts
l10n:
  sourceCommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{AccessibilitySidebar}}

Das globale `aria-keyshortcuts` Attribut gibt Tastenkombinationen an, die ein Autor implementiert hat, um ein Element zu aktivieren oder zu fokussieren.

## Beschreibung

Eine Tastenkombination ist eine Serie von einer oder mehreren Tasten, die Software anweisen, eine vorprogrammierte Aktion auszuführen. Tastenkombinationen ermöglichen es Benutzern, Befehle über die Tastatur auszuführen, die ansonsten das Aufrufen eines Menüs oder die Nutzung von Touch oder Maus erfordern würden. Die Eigenschaft `aria-keyshortcuts` definiert die Tastenkombinationen, die implementiert wurden, um das Element zu aktivieren oder zu fokussieren, auf dem das Attribut gesetzt ist.

Das `aria-keyshortcuts` Attribut macht die Existenz der Tastenkombination für unterstützende Technologien sichtbar, sodass die Anwesenheit der Tastenkombination den Benutzern mitgeteilt werden kann. Wie alle ARIA-Attribute hat es keinen Einfluss auf die Funktionalität der Seite; das Tastaturverhalten muss über JavaScript-Ereignishandler hinzugefügt werden.

Tastenkombinationen, die auf deaktivierte Elemente angewendet werden, sollten ebenfalls deaktiviert sein. Zum Beispiel, wenn ein Element für Mausanwender deaktiviert wird, denken Sie daran, es auch für Benutzer der Tastenkombination zu deaktivieren.

Stellen Sie sicher, dass alle Tastenkombinationen sowohl für sehende Benutzer sichtbar als auch für unterstützende Technologie verfügbar gemacht werden. Wenn Ihre Anwendung so komplex ist, dass sie Tastenkombinationen benötigt, auch bekannt als "Hotkeys", sollten Sie eine geführte Tour durch Ihre Anwendung, eine Barrierefreiheitsseite mit Dokumentation zu den Tastenkombinationen und anderen Barrierefreiheitsfunktionen, eine Tastenkombination-Übersichtseite oder ein Dialog-Pop-up oder eine andere Methode einschließen, um die Verfügbarkeit von Tastenkombinationen bekannt zu machen. Zusätzlich sollten Sie die Tastenkombinationen in Menüs und Tooltips anzeigen.

### Regeln für Eigenschaftswerte

Der Wert des `aria-keyshortcuts` Attributs ist eine durch Leerzeichen getrennte Liste von Tastenkombinationen, die gedrückt werden können, um ein Kommando oder Widget zur Texteingabe zu aktivieren. Jede Tastenkombination enthält null, eine oder mehrere Modifikatortasten, gefolgt von genau einer Nicht-Modifikatortaste, die gleichzeitig gedrückt wird, verbunden mit einem Pluszeichen ("+"). Der Attributwert ist nicht fallunterscheidend.

Beispiele für gültige Tastenkombinationen sind:

```plain
aria-keyshortcuts="A"
aria-keyshortcuts="Shift+Space"
aria-keyshortcuts="Control+Alt+."
aria-keyshortcuts="Control+Shift+&#39;"
aria-keyshortcuts="alt+shift+p control+f"
aria-keyshortcuts="Meta+C Meta+Shift+C"
```

Modifikatortasten sind Tasten, die keine Auswirkungen haben, wenn sie alleine verwendet werden. Sie werden als "Alt", "Control", "Shift", "Meta" (Befehlstaste auf Mac) oder "AltGraph" (Optionstaste auf Mac) geschrieben.

Nicht-Modifikatortasten sind Tasten, die Auswirkungen haben, wenn sie alleine verwendet werden, sei es ein Zeichen zu drucken, den Fokus zu bewegen oder anderweitig ein Tastaturereignis zu erzeugen. Nicht-Modifikatoren, die ein einzelnes Zeichen drucken, umfassen Zeichen wie `P`, `z` und `.`.

Da das Pluszeichen in der Schreibweise von Tastenkombinationen verwendet wird, wird es als `plus` geschrieben, wenn es als Nicht-Modifikator verwendet wird. Andere ausgeschriebene Nicht-Modifikatoren umfassen Leerzeichenzeichen `Space`, `Tab` und `Enter` sowie alle Zeichen, die Aktionen auslösen, wie `ArrowUp`, `PageUp` und `Escape`.

Wenn Sie ein Zeichen verwenden möchten, das Probleme verursachen könnte, wie ein Anführungszeichen innerhalb von Anführungszeichen, entkommen Sie das Zeichen: `Control+&#39;`.

Modifikatortasten müssen in jeder Tastenkombination zuerst aufgeführt werden. Mögliche Tastenkombinationen umfassen `Control+P` oder `Shift+Space` und `Q`. Wenn die vollständige Tastenkombination alle drei dieser Kombinationen in der Reihenfolge erfordert, würde sie als `aria-keyshortcuts="Control+P Shift+Space Q"` geschrieben. Wenn eine Tastenkombination mehr als eine Modifikatortaste enthält, ist die Reihenfolge der Modifikatoren egal, aber sie müssen alle zuerst kommen, vor dem Nicht-Modifikator.

Diese beiden Attributdeklarationen sind gleichwertig.

```plain example-good
aria-keyshortcuts="Shift+Control+V"
aria-keyshortcuts="control+shift+v"
```

Beachten Sie, dass Groß- und Kleinschreibung nicht von Bedeutung ist. Die Reihenfolge der Nicht-Modifikatoren jedoch schon.

Diese beiden Attributdeklarationen sind ungültig, da der Nicht-Modifikator zuletzt kommen muss.

```plain example-bad
aria-keyshortcuts="V+Shift+Control"
aria-keyshortcuts="V+Control+Shift"
```

Die aufgelistete Tastenkombination muss die Tasten sein, die der Benutzer drücken muss, nicht das Ergebnis der kombinierten Tastenanschläge. Zum Beispiel, auf einer USA-Tastatur, wenn Sie das `@` Symbol benötigen, wird die Tastenkombination als `"Shift+2"` geschrieben, nicht `"@"` noch `"Shift+@"`.

### Best Practices

Beim Versuch, die Barrierefreiheit Ihrer Seiten und Anwendungen zu verbessern, gibt es einige Best Practices, denen Sie folgen sollten, um sicherzustellen, dass Ihre "Verbesserungen" die Benutzererfahrung nicht negativ beeinflussen. Denken Sie daran, kein ARIA ist besser als schlechtes ARIA.

#### Überschreiben Sie keine Tastenkombinationen des Browsers, unterstützender Technologien oder Betriebssysteme

Wenn Sie Tastenkombinationen implementieren, stellen Sie sicher, dass Sie keine bereits vom Browser, von unterstützender Technologie oder vom Betriebssystem verwendeten Tastenkombinationen erstellen, es sei denn, sie werden für dasselbe verwendet. Zum Beispiel, `"Control+P"` wird von den meisten Benutzeragenten verwendet, um die Druckfunktion zu starten. Im Allgemeinen sollte eine Webanwendung keine "Control+P" Tastenkombination erstellen, da sie die Browserfunktionalität übernehmen würde. Es gibt Ausnahmen. Webanwendungen, bei denen Drucken häufig vorkommt, wie E-Mail-Anwendungen oder Dokumenteneditoren, würden die Übernahme der Druckfunktionalität des Browsers `"Control+P"` für einen anwendungsspezifischen Druckvorgang erwarten lassen.

Es sei denn, Sie erstellen eine HTML-Version einer Produktivitätsanwendung, sollten Sie wahrscheinlich auf die Implementierung von Tastenkombinationen verzichten. Während das Überschreiben von Betriebssystem- oder Browser-Tastenkombinationen für Nicht-Nutzer unterstützender Technologien ärgerlich sein kann, wenn Sie die Tastaturfunktionalität eines Bildschirmlesers überschreiben, können Sie den Zugang für den Benutzer mit unterstützender Technologie vollständig blockieren. Wenn Sie Tastenkombinationen erstellen müssen, vermeiden Sie Tastenkombinationen mit einem einzelnen Buchstaben und häufige Tastenkombinationen von Bildschirmleseprogrammen.

#### Berücksichtigen Sie Sprach- und Tastaturunterschiede

Berücksichtigen Sie die Vielfalt der verfügbaren Tastaturen und die verschiedenen Sprachen, die für die Tastaturpräferenzen verwendet werden. Modifikatortasten werden häufig verwendet, um sprachspezifische gängige Sonderzeichen und Ziffern zu erzeugen. Zum Beispiel verwenden Zahlen, wenn die Tastaturspracheinstellung auf Französisch (Frankreich) gesetzt ist, die Umschalttaste.

#### Verwenden Sie nicht stattdessen HTML

Das `aria-keyshortcuts` Attribut ist dem [problematischen](https://webaim.org/techniques/keyboard/accesskey#spec) HTML [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey) sehr ähnlich, das eine Tastenkombination für das aktuelle Element erzeugt. Wenn ein `accesskey` für ein Element definiert ist, legt der Browser die Modifikatortasten fest und übernimmt die gesamte Arbeit, die mit der Tastenkombination verbunden ist, ohne dass eine Skripterstellung erforderlich ist. Jede Kombination von Browser und Betriebssystem hat ihre eigenen Modifikatortasten für die im `accesskey` Attribut gesetzte Nicht-Modifikatortaste. Was für eine Kombination aus Betriebssystem, unterstützender Technologie und Browser funktioniert, funktioniert möglicherweise nicht mit anderen Kombinationen. Mit `aria-keyshortcuts` sind die Modificatortasten in die Liste der Tastenkombinationen als Attributwert eingeschlossen und die Funktionalität muss gescriptet werden.

```html
<p>
  Press the
  <strong><u>S</u></strong
  >tress reliever to relax!
</p>
<button accesskey="s">Stress reliever</button>
```

In diesem Beispiel haben wir sichergestellt, dass die Anwesenheit der Tastenkombination auch sehenden Benutzern bekannt ist, indem das Nicht-Modifikator-Zeichen hervorgehoben wurde.

Während das Ziel des `accesskey` Attributs mit der Intention von `aria-keyshortcuts` übereinstimmt, und zwar nativ, ist `accesskey` voller Probleme. Aufgrund dieser Probleme wird im Allgemeinen davon abgeraten, Zugriffskeys für die meisten allgemeinen Websites und Webanwendungen zu verwenden.

Zusätzlich zu schlechter Browserunterstützung gibt es für `accesskey` die gleichen Bedenken wie für `aria-keyshortcuts`:

- Ein accesskey Wert kann mit einer System- oder Browser-Tastenkombination oder der Funktionalität einer unterstützenden Technologie in Konflikt stehen.
- Bestimmte Tastenwerte sind möglicherweise auf bestimmten Tastaturen nicht vorhanden, insbesondere wenn die Internationalisierung ein Thema ist. So könnte die Anpassung an spezifische Sprachen weitere Probleme verursachen.
- Werte, die auf Zahlen basieren, können für Menschen, die kognitive Herausforderungen erleben, verwirrend sein, da die Zahl keine logische Verbindung zu der Funktionalität hat, die sie auslöst.
- Den Benutzer über das Vorhandensein von Tastenkombinationen informieren, damit er über die Funktionalität Bescheid weiß. Wenn dem System eine Methode fehlt, den Benutzer über diese Funktion zu informieren, könnte der Benutzer versehentlich eine Tastenkombination aktivieren.

## Werte

- `<string>`
  - : Die durch Leerzeichen getrennte Liste von Tastenkombinationen, die, wenn sie gedrückt werden, die Aktion ausführen.

## Beispiel

In diesem Beispiel wird das `aria-keyshortcuts` Attribut auf dem Element auf "Alt+Shift+A" gesetzt.

```html
<a href="#content" aria-keyshortcuts="Alt+Shift+A">Skip to content</a>
```

## Zugehörige Schnittstellen

- [`Element.ariaKeyShortcuts`](/de/docs/Web/API/Element/ariaKeyShortcuts)
  - : Die [`ariaKeyShortcuts`](/de/docs/Web/API/Element/ariaKeyShortcuts) Eigenschaft, Teil der [`Element`](/de/docs/Web/API/Element) Schnittstelle, spiegelt den Wert des `aria-keyshortcuts` Attributs wider.
- [`ElementInternals.ariaKeyShortcuts`](/de/docs/Web/API/ElementInternals/ariaKeyShortcuts)
  - : Die [`ariaKeyShortcuts`](/de/docs/Web/API/ElementInternals/ariaKeyShortcuts) Eigenschaft, Teil der [`ElementInternals`](/de/docs/Web/API/ElementInternals) Schnittstelle, spiegelt den Wert des `aria-keyshortcuts` Attributs wider.

## Zugehörige Rollen

In **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Abschnitt [Tastenkombinationen](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#keyboardshortcuts) in den ARIA Authoring Practices
- HTML [`accesskey`](/de/docs/Web/HTML/Global_attributes/accesskey) Attribut
- [Probleme mit `accesskey`](https://webaim.org/techniques/keyboard/accesskey#spec)
