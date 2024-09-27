---
title: Achsen
slug: Web/XPath/Axes
l10n:
  sourceCommit: b6f343538eac4a803943b4e99b0c0545b372645a
---

{{XsltSidebar}}

Im [XPath](/de/docs/Web/XPath)-Standard gibt es dreizehn verschiedene Achsen. Eine Achse stellt eine Beziehung zum Kontextknoten dar und wird verwendet, um Knoten relativ zu diesem Knoten im Baum zu lokalisieren.

Für weitere Informationen zur Verwendung von XPath-Ausdrücken, siehe bitte den Abschnitt [Zum Weiterlesen](/de/docs/Web/XSLT/Transforming_XML_with_XSLT#for_further_reading) am Ende des Dokuments [Transforming XML with XSLT](/de/docs/Web/XSLT/Transforming_XML_with_XSLT). Siehe auch den [Abschnitt 'axes' im xpath spec](https://www.w3.org/TR/xpath-30/#axes).

- `ancestor`
  - : Bezeichnet alle Vorfahren des Kontextknotens, beginnend mit dem übergeordneten Knoten und fortlaufend bis zum Wurzelknoten.
- `ancestor-or-self`
  - : Bezeichnet den Kontextknoten und alle seine Vorfahren, einschließlich des Wurzelknotens.
- `attribute`
  - : Bezeichnet die Attribute des Kontextknotens. Nur Elemente haben Attribute. Diese Achse kann mit dem At-Zeichen (`@`) abgekürzt werden.
- `child`
  - : Bezeichnet die Kinder des Kontextknotens. Wenn ein XPath-Ausdruck keine Achse angibt, wird diese standardmäßig angenommen. Da nur der Wurzelknoten oder Elementknoten Kinder haben, wird jede andere Verwendung nichts auswählen.
- `descendant`
  - : Bezeichnet alle Kinder des Kontextknotens und alle deren Kinder und so weiter. Attribut- und Namespace-Knoten sind **nicht** eingeschlossen - der `parent` eines `attribute`-Knotens ist ein Elementknoten, jedoch sind `attribute`-Knoten nicht die Kinder ihrer Eltern.
- `descendant-or-self`
  - : Bezeichnet den Kontextknoten und alle seine Nachkommen. Attribut- und Namespace-Knoten sind **nicht** eingeschlossen - der `parent` eines `attribute`-Knotens ist ein Elementknoten, aber `attribute`-Knoten sind nicht die Kinder ihrer Eltern.
- `following`
  - : Bezeichnet alle Knoten, die nach dem Kontextknoten erscheinen, mit Ausnahme der `descendant`-, `attribute`- und `namespace`-Knoten.
- `following-sibling`
  - : Bezeichnet alle Knoten, die denselben Elternteil wie der Kontextknoten haben und im Quelldokument nach dem Kontextknoten erscheinen.
- `namespace` _(nicht unterstützt)_
  - : Bezeichnet alle Knoten, die im Gültigkeitsbereich für den Kontextknoten sind. In diesem Fall muss der Kontextknoten ein Elementknoten sein.
- `parent`
  - : Bezeichnet den einzelnen Knoten, der das Elternteil des Kontextknotens ist. Er kann als zwei Punkte (`..`) abgekürzt werden.
- `preceding`
  - : Bezeichnet alle Knoten, die dem Kontextknoten im Dokument vorangehen, mit Ausnahme der `ancestor`-, `attribute`- und `namespace`-Knoten.
- `preceding-sibling`
  - : Bezeichnet alle Knoten, die denselben Elternteil wie der Kontextknoten haben und im Quelldokument vor dem Kontextknoten erscheinen.
- `self`
  - : Bezeichnet den Kontextknoten selbst. Er kann als ein einzelner Punkt (`.`) abgekürzt werden.
