---
title: aria-keyshortcuts
slug: Web/Accessibility/ARIA/Attributes/aria-keyshortcuts
l10n:
  sourceCommit: f7c2c3024f1d5d82f483f291a9ce4584ff34ec38
---

{{AccessibilitySidebar}}

Das globale `aria-keyshortcuts` Attribut gibt an, welche Tastenkombinationen der Autor implementiert hat, um ein Element zu aktivieren oder den Fokus darauf zu setzen.

## Beschreibung

Eine Tastenkombination ist eine Reihe von einer oder mehreren Tasten, die Software anweisen, eine vorprogrammierte Aktion auszuführen. Tastenkombinationen ermöglichen es Tastaturnutzern, Befehle über die Tastatur zu aktivieren, die sonst den Zugriff auf ein Menü oder die Nutzung von Berührungs- oder Maustechnologie erfordern würden. Die `aria-keyshortcuts`-Eigenschaft definiert die Tastenkombinationen, die implementiert wurden, um das Element, auf dem das Attribut gesetzt ist, zu aktivieren oder den Fokus darauf zu setzen.

Das `aria-keyshortcuts`-Attribut macht das Vorhandensein der Abkürzung für Unterstützungstechnologien sichtbar, sodass diese den Benutzern mitgeteilt werden kann. Wie alle ARIA-Attribute hat es keine Auswirkung auf die Funktionalität der Seite; das Verhalten der Tastatur muss über JavaScript-Ereignishandler hinzugefügt werden.

Auf deaktivierte Elemente angewandte Tastenkombinationen sollten ebenfalls deaktiviert sein. Beispielsweise sollten Sie, wenn Sie ein Element für Mausanwender deaktivieren, es auch für Nutzer von Tastenkombinationen deaktivieren.

Stellen Sie sicher, dass alle Tastenkombinationen sowohl für sehende Nutzer sichtbar als auch für Unterstützungstechnologien verfügbar gemacht werden. Wenn Ihre Anwendung komplex genug ist, um Tastenkombinationen, auch als "Hotkeys" bekannt, zu benötigen, fügen Sie eine geführte Tour Ihrer Anwendung hinzu, eine Zugänglichkeitsseite, die Tastenkombinationen und andere Zugänglichkeitsmerkmale dokumentiert, ein Kürzel-Übersichtsblatt oder ein Popup-Dialog oder eine andere Methode, um die Verfügbarkeit der Tastenkombinationen bekannt zu machen. Zeigen Sie zudem die Abkürzung in Menüs und Tooltips an.

### Regeln für Eigenschaftswerte

Der Wert des `aria-keyshortcuts`-Attributs ist eine durch Leerzeichen getrennte Liste von Tasten-Kombinationen, die gedrückt werden können, um ein Kommando oder ein Textfeld-Widget zu aktivieren. Jede Tasten-Kombination beinhaltet keine, eine oder mehrere Modifikator-Tasten, gefolgt von genau einer Nicht-Modifikator-Taste, die gleichzeitig gedrückt werden sollen und mit einem Pluszeichen ("+") verbunden sind. Der Attributwert ist nicht groß- und kleinschreibungssensitiv.

Beispiele für gültige Tastenkombinationen sind:

```plain
aria-keyshortcuts="A"
aria-keyshortcuts="Shift+Space"
aria-keyshortcuts="Control+Alt+."
aria-keyshortcuts="Control+Shift+&#39;"
aria-keyshortcuts="alt+shift+p control+f"
aria-keyshortcuts="Meta+C Meta+Shift+C"
```

Modifikator-Tasten sind Tasten, die alleine keine Wirkung haben. Sie werden als "Alt", "Control", "Shift", "Meta" (Befehlstaste auf dem Mac) oder "AltGraph" (Optionstaste auf dem Mac) geschrieben.

Nicht-Modifikator-Tasten sind Tasten, die alleine eine Wirkung haben, sei es, dass sie ein Zeichen drucken, den Fokus verschieben oder auf andere Weise ein Tastaturereignis auslösen, wenn sie benutzt werden. Nicht-Modifikatoren, die ein einzelnes Zeichen drucken, umfassen Zeichen wie `P`, `z` und `.`.

Da das Pluszeichen bei der Schreibweise von Tasten-Kombinationen verwendet wird, wird es als `plus` geschrieben, wenn es als Nicht-Modifikator verwendet wird. Andere ausgeschriebene Nicht-Modifikatoren umfassen Leerzeichentastenzeichen `Space`, `Tab` und `Enter` sowie alle Zeichen, die zu Aktionen führen, wie `ArrowUp`, `PageUp` und `Escape`.

Wenn Sie ein Zeichen verwenden möchten, das Probleme verursachen könnte, wie ein doppeltes Anführungszeichen innerhalb von doppelten Anführungszeichen, umgehen Sie das Zeichen: `Control+&#39;`.

Modifikator-Tasten müssen in jeder Tasten-Kombination zuerst aufgeführt werden. Mögliche Tasten-Kombinationen sind `Control+P` oder `Shift+Space` und `Q`. Wenn die vollständige Abkürzung all diese drei Kombinationen in dieser Reihenfolge erfordert, würde es als `aria-keyshortcuts="Control+P Shift+Space Q"` geschrieben. Wann eine Tasten-Kombination mehr als einen Modifikator enthält, spielt die Reihenfolge der Modifikatoren keine Rolle, aber sie müssen alle zuerst kommen, vor dem Nicht-Modifikator.

Diese beiden Attributdeklarationen sind gleichwertig.

```plain example-good
aria-keyshortcuts="Shift+Control+V"
aria-keyshortcuts="control+shift+v"
```

Beachten Sie, dass die Groß- und Kleinschreibung keine Rolle spielt. Aber die Reihenfolge des Nicht-Modifikators tut es.

Diese zwei Attributdeklarationen sind ungültig, weil der Nicht-Modifikator zuletzt kommen muss.

```plain example-bad
aria-keyshortcuts="V+Shift+Control"
aria-keyshortcuts="V+Control+Shift"
```

Die aufgelistete Tasten-Kombination muss die sein, die der Benutzer drücken muss, nicht das Ergebnis der kombinierten Tastenanschläge. Zum Beispiel, bei einer USA-Tastatur, wenn Sie das `@` Symbol benötigen, wird die Tasten-Kombination als `"Shift+2"` geschrieben, nicht als `"@"` oder `"Shift+@"`.

### Beste Praktiken

Um die Zugänglichkeit Ihrer Websites und Anwendungen zu verbessern, gibt es einige bewährte Verfahren, die Sie befolgen sollten, um sicherzustellen, dass Ihre "Verbesserungen" keine negativen Auswirkungen auf die Benutzererfahrung haben. Denken Sie daran, dass keine ARIA besser ist als schlechte ARIA.

#### Überschreiben Sie nicht die Kurzbefehle des Browsers, der Unterstützungstechnologie oder des Betriebssystems

Achten Sie bei der Implementierung von Tastenkombinationen darauf, keine Kurzbefehle zu erstellen, die bereits vom Browser, von Unterstützungstechnologien oder dem Betriebssystem verwendet werden, es sei denn, sie werden für dasselbe verwendet. Zum Beispiel wird `"Control+P"` von den meisten Benutzeragenten verwendet, um die Druckfunktion zu initiieren. Im Allgemeinen sollte eine Webanwendung keinen "Control+P" Kurzbefehl erstellen, da es die Funktionalität des Browsers verdrängen würde. Es gibt Ausnahmen. Webanwendungen, bei denen Drucken häufig ist, wie E-Mail-Anwendungen oder Dokument-Editoren, würde das Verdrängen der `"Control+P"` Druckfunktionalität des Browsers für einen spezifischen Druckfluss der Anwendung erwartet.

Es sei denn, Sie erstellen eine HTML-Version einer Produktivitätsanwendung, sollten Sie es wahrscheinlich vermeiden, Tastenkombinationen zu implementieren. Während das Überschreiben eines Betriebssystems oder Browser-Tastaturkürzels für nicht unterstützende Technologie-Nutzer ärgerlich sein kann, können Sie den Zugang für den Benutzer der Unterstützungstechnologie vollständig ausschalten, wenn Sie die Tastaturfunktionalität eines Screenreaders überschreiben. Wenn Sie Tastenkombinationen erstellen müssen, vermeiden Sie einstellige Tastenkombinationen und häufige Screenreader-Tastaturkürzel.

#### Berücksichtigen Sie Sprach- und Tastaturunterschiede

Berücksichtigen Sie die Vielfalt der verfügbaren Tastaturen und die verschiedenen Tastaturspracheinstellungen. Modifikator-Tasten werden häufig verwendet, um sprachspezifische häufige Satzzeichen und Ziffern zu erstellen. Zum Beispiel verwenden Zahlen, wenn die Tastatur-Ländervorwahl auf Französisch (Frankreich) eingestellt ist, die Shift-Taste.

#### Verwenden Sie nicht stattdessen HTML

Das `aria-keyshortcuts`-Attribut ist dem [problematischen](https://webaim.org/techniques/keyboard/accesskey#spec) HTML-Attribut [`accesskey`](/de/docs/Web/HTML/Global_attributes#accesskey), das eine Tastenkombination für das aktuelle Element erzeugt, sehr ähnlich. Wenn ein `accesskey` für ein Element definiert ist, legt der Browser die Modifikatoren fest und erledigt die gesamte Arbeit, die Abkürzung zu bearbeiten, ohne dass ein Skript erforderlich ist. Jede Kombination aus Browser und Betriebssystem hat ihre eigenen Modifikator-Tasten für den Nicht-Modifikator, der im `accesskey`-Attribut festgelegt ist. Was für eine Kombination aus Betriebssystem, Unterstützungstechnologie und Browser funktioniert, kann mit anderen Kombinationen nicht funktionieren. Bei `aria-keyshortcuts` sind die Modifikator-Tasten in der Attributwertliste der Tasten-Kombinationen enthalten und die Funktionalität muss geskriptet werden.

```html
<p>
  Drücken Sie den
  <strong><u>S</u></strong
  >tress-Reliever, um sich zu entspannen!
</p>
<button accesskey="s">Stress-Reliever</button>
```

In diesem Beispiel haben wir sichergestellt, dass das Vorhandensein des Kürzels auch sehenden Benutzern bekannt war, indem wir das Nicht-Modifikator-Zeichen hervorgehoben haben.

Obwohl das Ziel des `accesskey`-Attributs die Absicht von `aria-keyshortcuts` teilt und dies nativ tun soll, ist `accesskey` mit Problemen behaftet. Aufgrund dieser Probleme wird allgemein geraten, keine Accesskeys für die meisten allgemein genutzten Websites und Web-Apps zu verwenden.

Zusätzlich zu schlechter Browser-Unterstützung treten die gleichen Bedenken für `accesskey` auf wie für `aria-keyshortcuts`:

- Ein Accesskey-Wert kann mit einem System- oder Browser-Tastaturkürzel oder der Funktionalität von Unterstützungstechnologien in Konflikt geraten.
- Bestimmte Tastenwerte sind möglicherweise auf bestimmten Tastaturen nicht verfügbar, besonders wenn Internationalisierung eine Rolle spielt. Die Anpassung an bestimmte Sprachen könnte daher weitere Probleme verursachen.
- Werte, die auf Zahlen beruhen, können für Personen mit kognitiven Beeinträchtigungen verwirrend sein, wenn die Zahl keine logische Assoziation mit der Funktion hat, die sie auslöst.
- Den Benutzer darüber zu informieren, dass Kürzel vorhanden sind, damit er sich der Funktionalität bewusst ist. Wenn das System keine Methode besitzt, den Benutzer über dieses Feature zu informieren, könnte der Benutzer versehentlich ein Kürzel aktivieren.

## Werte

- `<string>`
  - : Die durch Leerzeichen getrennte Liste der Tasten-Kombinationen, die, wenn gedrückt, die Aktion ausführen.

## Beispiel

In diesem Beispiel ist das `aria-keyshortcuts`-Attribut auf dem Element auf "Alt+Shift+A" gesetzt.

```html
<a href="#content" aria-keyshortcuts="Alt+Shift+A">Skip to content</a>
```

## Zugehörige Schnittstellen

- {{domxref("Element.ariaKeyShortcuts")}}
  - : Die [`ariaKeyShortcuts`](/de/docs/Web/API/Element/ariaKeyShortcuts)-Eigenschaft, Teil der {{domxref("Element")}}-Schnittstelle, spiegelt den Wert des `aria-keyshortcuts`-Attributs wider.
- {{domxref("ElementInternals.ariaKeyShortcuts")}}
  - : Die [`ariaKeyShortcuts`](/de/docs/Web/API/ElementInternals/ariaKeyShortcuts)-Eigenschaft, Teil der {{domxref("ElementInternals")}}-Schnittstelle, spiegelt den Wert des `aria-keyshortcuts`-Attributs wider.

## Zugehörige Rollen

Wird in **ALLEN** Rollen verwendet.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Der Abschnitt [Tastenkombinationen](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#keyboardshortcuts) in den ARIA-Autorierungspraktiken
- HTML-Attribut [`accesskey`](/de/docs/Web/HTML/Global_attributes#accesskey)
- [Probleme mit `accesskey`](https://webaim.org/techniques/keyboard/accesskey#spec)
