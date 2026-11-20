---
title: "ARIA: application-Rolle"
short-title: application
slug: Web/Accessibility/ARIA/Reference/Roles/application_role
l10n:
  sourceCommit: 5af4f6e12c119ea0d809b35b3fa3266a0fbe4ef4
---

Die Rolle `application` signalisiert assistiven Technologien, dass ein Element _und alle seine Kindelemente_ ähnlich wie eine Desktop-Anwendung behandelt werden sollen und dass keine herkömmlichen Verfahren zur Interpretation von HTML verwendet werden sollen. Diese Rolle sollte nur für sehr dynamische, desktopähnliche Webanwendungen verwendet werden. Die meisten mobilen und Desktop-Web-Apps gelten in diesem Sinne _nicht_ als Anwendungen.

```html
<div role="application" aria-label="…">…</div>
```

Durch Angabe der Rolle `application` wird signalisiert, dass dieses `div`-Element und alle seine Nachfahren so behandelt werden sollen, als wären sie Teil einer Desktop-Anwendung.

## Beschreibung

Die [Dokumentstrukturrolle](/de/docs/Web/Accessibility/ARIA/Reference/Roles#1._document_structure_roles) `application` signalisiert assistiven Technologien, dass dieser Teil des Webinhalts Elemente enthält, die keinem anderen bekannten HTML-Element oder WAI-ARIA-Widget entsprechen. Jede besondere Interpretation von HTML-Strukturen und Widgets sollte ausgesetzt werden. Die Steuerung von Interaktionen per Maus, Tastatur oder Touch sollte vollständig dem Browser und der Webanwendung überlassen werden.

In diesem Modus ist der Autor der Webanwendung vollständig für die Verarbeitung sämtlicher Tastatureingaben, die Fokusverwaltung und andere Interaktionen verantwortlich. Er kann nicht davon ausgehen, dass assistive Technologien diese Aufgaben übernehmen.

Wenn die durch die Rolle `application` umfasste Webanwendung Bereiche enthält, die _wie normale Webinhalte_ behandelt werden sollen, sollten diese Inhalte in einem Element mit der Rolle [`document`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role) oder [`article`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role) enthalten sein.

### Hintergrund

Aus historischen Gründen haben Screenreader und einige andere assistive Technologien (AT) – insbesondere unter Windows – traditionell den gesamten Webinhalt auf einmal vom Browser übernommen, nachdem er vollständig geladen war. Die AT erstellen daraus eine eigene Darstellung, die für Menschen mit Sehbehinderung möglichst gut zugänglich ist. Dies wird häufig als _virtuelles Dokument_, _Browse-Modus_ oder ähnlich bezeichnet. Das Dokument wird auf eine einspaltige Ansicht reduziert. Dabei entsteht ein Modell für die Tastaturinteraktion, das einem Textverarbeitungsprogramm ähnelt: Nutzer können den Inhalt Zeile für Zeile, Satz für Satz oder Absatz für Absatz lesen. Die AT liest dabei auch semantische Informationen zu Links, Überschriften, Formularsteuerelementen, Tabellen, Listen oder Bildern vor.

Darüber hinaus hat sich im Laufe der Jahre eine Reihe sogenannter _Schnellnavigationstasten_ etabliert. Damit können Menschen mit Sehbehinderung eine Seite nach bestimmten Elementtypen durchsuchen. Dazu gehören üblicherweise Überschriften, Formularfelder, Listen, Tabellen, Links, Grafiken oder Landmark-Bereiche.

Damit all dies funktioniert, fangen AT nahezu sämtliche Tastatureingaben ab und verarbeiten sie selbst, ohne sie an den Browser oder einen anderen User Agent weiterzuleiten. Für die Interaktion mit einer Webseite wird eine Standardgruppe von Widgets erkannt. Wird bei einem solchen Widget eine bestimmte Taste gedrückt (üblicherweise <kbd>Enter</kbd>), wird dieser Modus deaktiviert. Im dann aktiven Screenreader-Modus, häufig _Formularmodus_ oder _Fokusmodus_ genannt, werden sämtliche Tastatureingaben wieder an den Browser weitergeleitet. Mit <kbd>Escape</kbd> wird am häufigsten in den _Browse-Modus_ zurückgewechselt. Innerhalb eines bestimmten `application`-Bereichs können einige Screenreader jedoch andere Tasten erfordern, um diesen Modus gezielt zu verlassen – beispielsweise <kbd>NUMPAD PLUS</kbd> bei JAWS.

Die Rolle `application` soll ermöglichen, dass Widgets außerhalb dieser Standardgruppe in AT, die sowohl einen _Browse-_ als auch einen _Fokusmodus_ für die Interaktion mit Webinhalten verwenden, direkt bedient werden können. Für die meisten gängigen Widgets gibt es erwartete Verhaltensweisen bei der Tastaturbedienung. Eine vom Autor einer Webanwendung eigens entwickelte Tastaturbedienung könnte deshalb verwirrend sein.

### Zugehörige WAI-ARIA-Rollen, -Zustände und -Eigenschaften

- [`document`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/document_role), [`article`](/de/docs/Web/Accessibility/ARIA/Reference/Roles/article_role)
  - : Kennzeichnen Bereiche der Anwendung, die wie normale Webinhalte behandelt werden sollen.
- [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
  - : Wird verwendet, um den Fokus innerhalb der Anwendung zu verwalten.
- [`aria-label`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Gibt den Namen der Anwendung oder den Zweck des bereitgestellten Widgets an.
- [`aria-describedby`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Verweist auf die ID eines Elements, das zusätzliche Anweisungen zur Navigation oder Bedienung dieses Elements enthält.
- [`aria-roledescription`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription)
  - : Gibt der Anwendung eine aussagekräftigere Rollenbeschreibung, die Screenreader vorlesen können. Diese sollte lokalisiert werden.
- [`aria-disabled`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-disabled)
  - : Zeigt an, dass ein Element sichtbar, aber deaktiviert ist.
- [`aria-errormessage`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-errormessage)
  - : Verweist auf das Element, das die Fehlermeldung für das Element bereitstellt, auf dem das Attribut gesetzt ist.
- [`aria-expanded`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded)
  - : Ist der Wert `true`, ist das Gruppierungselement, das diesem Element gehört oder von ihm gesteuert wird, aufgeklappt; bei `false` ist es eingeklappt.
- [`aria-haspopup`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-haspopup)
  - : Zeigt an, dass das Element ein Popup, etwa ein Menü oder einen Dialog, öffnen kann.

### Tastaturinteraktionen

Die Tastaturinteraktion liegt vollständig in der Verantwortung des Autors der Webanwendung und kann entsprechend dem implementierten Widget gestaltet werden. In einer Präsentationsanwendung könnte beispielsweise ein Widget erstellt werden, mit dem sich Elemente auf einer Folie mithilfe der Pfeiltasten positionieren lassen. Über eine ARIA-Live-Region könnte es akustische Rückmeldungen zur Position und zu Überlappungen mit anderen Objekten geben. Der Fokus wird dabei über _aria-activedescendant_ verwaltet.

Die Anwendung muss die Tasten <kbd>Tab</kbd>, <kbd>Space</kbd>, <kbd>Enter</kbd> und <kbd>Escape</kbd> verarbeiten. Eine Ausnahme besteht, wenn der Fokus auf einem Standard-Widget innerhalb der Anwendung liegt, dessen Tastaturnavigation vom Browser unterstützt wird, beispielsweise auf einem [input](/de/docs/Web/HTML/Reference/Elements/input)-Element.

### Erforderliche JavaScript-Funktionen

- keyPress
  - : Wird verwendet, um Tastatureingaben zu verarbeiten und den Fokus zu steuern.
- Click, Touch
  - : Sollten ebenfalls entsprechend dem jeweiligen Widget verarbeitet werden.
- Ändern von Attributwerten
  - : [`aria-activedescendant`](/de/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) wird verwendet, um den Fokus innerhalb des Anwendungscontainers zu verwalten. Setzen Sie den Wert als Reaktion auf Tastatur- oder andere Anwendungsereignisse, die den Fokus oder den Interaktionspunkt ändern.

> [!NOTE]
> Für die Rolle `application` gibt es kein entsprechendes HTML-Widget; ihre Gestaltung ist daher völlig frei. Der Autor der Anwendung muss die volle Verantwortung dafür übernehmen, dass Nutzer nicht in einer Fokusfalle stecken bleiben, die sie nicht verlassen können. Sämtliche Aspekte der Interaktion müssen berücksichtigt werden, einschließlich der Rückkehr zu regulären Webinhalten in anderen Bereichen der Seite. Verwenden Sie die Rolle umsichtig und mit Bedacht – und denken Sie daran, Ihre Anwendung zu testen!

## Rangfolge

Wird die Rolle `application` auf ein Element angewendet, werden dieses Element und alle seine Nachfahren als Anwendungsinhalt statt als Webinhalt behandelt. Etwaige Lesefunktionen assistiver Technologien für Webinhalte kommen dann nicht zum Einsatz.

## Aspekte der Barrierefreiheit

Eine unsachgemäße Verwendung der Rolle `application` kann den Zugriff auf Informationen einer Webseite unbeabsichtigt verhindern. Setzen Sie sie daher sehr bedacht ein. Prüfen Sie sorgfältig, ob Sie sie tatsächlich benötigen oder ob sich dieselbe Aufgabe mit anderen bekannten Widgets lösen lässt.

Wenn Sie die Rolle verwenden, sollten Sie sie dem kleinstmöglichen gemeinsamen Containerelement zuweisen und beispielsweise nicht dem `<body>`-Element. Testen Sie Ihre Implementierung außerdem mit assistiven Technologien, um sicherzustellen, dass sie wie beabsichtigt funktioniert.

## Beispiele

Einige bekannte Webanwendungen, die die Rolle `application` sachgerecht verwenden oder verwendet haben, sind:

- Google Docs, Sheets und Slides
- Die WYSIWYG-Webeditoren CKEditor und TinyMCE, wie sie beispielsweise auf dem Mozilla Developer Network verwendet werden
- Einige Bereiche von Gmail

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Wenn Sie die WAI-ARIA-Rolle `application` verwenden, tun Sie dies mit Bedacht](https://www.marcozehe.de/if-you-use-the-wai-aria-role-application-please-do-so-wisely/) – Blogbeitrag von Marco Zehe
- [Die ARIA-Rolle `application` verwenden](https://tink.uk/using-the-aria-application-role/) – von Léonie Watson
