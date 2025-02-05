---
title: Achsen
slug: Web/XML/XPath/Reference/Axes
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

In der [XPath](/de/docs/Web/XML/XPath)-Spezifikation gibt es dreizehn verschiedene Achsen. Eine Achse stellt eine Beziehung zum Kontextknoten dar und wird verwendet, um Knoten relativ zu diesem Knoten im Baum zu lokalisieren.

Weitere Informationen zur Verwendung von XPath-Ausdrücken finden Sie im Abschnitt [Weiterführende Literatur](/de/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT/For_Further_Reading) des [XML mit XSLT transformieren](/de/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT)-Leitfadens. Siehe auch den Abschnitt ['Axes' in der XPath-Spezifikation](https://www.w3.org/TR/xpath-30/#axes).

- `ancestor`
  - : Gibt alle Vorfahren des Kontextknotens an, beginnend mit dem Elternknoten und bis zum Wurzelknoten aufsteigend.
- `ancestor-or-self`
  - : Gibt den Kontextknoten und alle seine Vorfahren an, einschließlich des Wurzelknotens.
- `attribute`
  - : Gibt die Attribute des Kontextknotens an. Nur Elemente haben Attribute. Diese Achse kann mit dem At-Zeichen (`@`) abgekürzt werden.
- `child`
  - : Gibt die Kinder des Kontextknotens an. Wenn ein XPath-Ausdruck keine Achse angibt, wird standardmäßig diese verstanden. Da nur der Wurzelknoten oder Elementknoten Kinder haben, wird jede andere Verwendung nichts auswählen.
- `descendant`
  - : Gibt alle Kinder des Kontextknotens an sowie alle deren Kinder und so weiter. Attribute und Namespace-Knoten sind **nicht** enthalten – der `parent` eines `attribute`-Knotens ist ein Elementknoten, jedoch sind `attribute`-Knoten nicht die Kinder ihrer Eltern.
- `descendant-or-self`
  - : Gibt den Kontextknoten und alle seine Nachkommen an. Attribute und Namespace-Knoten sind **nicht** enthalten – der `parent` eines `attribute`-Knotens ist ein Elementknoten, jedoch sind `attribute`-Knoten nicht die Kinder ihrer Eltern.
- `following`
  - : Gibt alle Knoten an, die nach dem Kontextknoten erscheinen, außer jeglicher `descendant`-, `attribute`- und `namespace`-Knoten.
- `following-sibling`
  - : Gibt alle Knoten an, die denselben Elternknoten wie der Kontextknoten haben und im Quelldokument nach dem Kontextknoten erscheinen.
- `namespace` _(nicht unterstützt)_
  - : Gibt alle Knoten an, die im Geltungsbereich des Kontextknotens liegen. In diesem Fall muss der Kontextknoten ein Elementknoten sein.
- `parent`
  - : Gibt den einzelnen Knoten an, der der Elternknoten des Kontextknotens ist. Dies kann als zwei Punkte (`..`) abgekürzt werden.
- `preceding`
  - : Gibt alle Knoten an, die im Dokument vor dem Kontextknoten erscheinen, außer jeglicher `ancestor`-, `attribute`- und `namespace`-Knoten.
- `preceding-sibling`
  - : Gibt alle Knoten an, die denselben Elternknoten wie der Kontextknoten haben und im Quelldokument vor dem Kontextknoten erscheinen.
- `self`
  - : Gibt den Kontextknoten selbst an. Dies kann als ein einzelner Punkt (`.`) abgekürzt werden.
