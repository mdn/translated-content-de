---
title: Achsen
slug: Web/XPath/Reference/Axes
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Es gibt dreizehn verschiedene Achsen in der [XPath](/de/docs/Web/XPath)-Spezifikation. Eine Achse repräsentiert eine Beziehung zum Kontextknoten und wird verwendet, um Knoten relativ zu diesem Knoten im Baum zu lokalisieren.

Für weitere Informationen zur Verwendung von XPath-Ausdrücken sehen Sie bitte den Abschnitt [Weiterführende Literatur](/de/docs/Web/XSLT/Guides/Transforming_XML_with_XSLT/For_Further_Reading) im [Transformieren von XML mit XSLT](/de/docs/Web/XSLT/Guides/Transforming_XML_with_XSLT)-Leitfaden. Siehe auch den ['axes' Abschnitt in der xpath Spec](https://www.w3.org/TR/xpath-30/#axes).

- `ancestor`
  - : Gibt alle Vorfahren des Kontextknotens an, beginnend mit dem Elterknoten und bis zum Wurzelknoten gehend.
- `ancestor-or-self`
  - : Gibt den Kontextknoten und alle seine Vorfahren an, einschließlich des Wurzelknotens.
- `attribute`
  - : Gibt die Attribute des Kontextknotens an. Nur Elemente haben Attribute. Diese Achse kann mit dem At-Zeichen (`@`) abgekürzt werden.
- `child`
  - : Gibt die Kinder des Kontextknotens an. Wenn ein XPath-Ausdruck keine Achse angibt, wird dies standardmäßig verstanden. Da nur der Wurzelknoten oder Elementknoten Kinder haben, wird jede andere Verwendung nichts auswählen.
- `descendant`
  - : Gibt alle Kinder des Kontextknotens und alle ihre Kinder usw. an. Attribut- und Namespace-Knoten sind **nicht** einbezogen - der `parent` eines `attribute`-Knotens ist ein Elementknoten, aber `attribute`-Knoten sind nicht die Kinder ihrer Eltern.
- `descendant-or-self`
  - : Gibt den Kontextknoten und alle seine Nachkommen an. Attribut- und Namespace-Knoten sind **nicht** einbezogen - der `parent` eines `attribute`-Knotens ist ein Elementknoten, aber `attribute`-Knoten sind nicht die Kinder ihrer Eltern.
- `following`
  - : Gibt alle Knoten an, die nach dem Kontextknoten erscheinen, außer `descendant`, `attribute` und `namespace` Knoten.
- `following-sibling`
  - : Gibt alle Knoten an, die denselben Elterknoten wie der Kontextknoten haben und nach dem Kontextknoten im Quelldokument erscheinen.
- `namespace` _(nicht unterstützt)_
  - : Gibt alle Knoten an, die im Scope für den Kontextknoten sind. In diesem Fall muss der Kontextknoten ein Elementknoten sein.
- `parent`
  - : Gibt den einzelnen Knoten an, der der Elterknoten des Kontextknotens ist. Es kann als zwei Punkte (`..`) abgekürzt werden.
- `preceding`
  - : Gibt alle Knoten an, die dem Kontextknoten im Dokument vorausgehen, außer `ancestor`, `attribute` und `namespace` Knoten.
- `preceding-sibling`
  - : Gibt alle Knoten an, die denselben Elterknoten wie der Kontextknoten haben und vor dem Kontextknoten im Quelldokument erscheinen.
- `self`
  - : Gibt den Kontextknoten selbst an. Es kann als ein einzelner Punkt (`.`) abgekürzt werden.
