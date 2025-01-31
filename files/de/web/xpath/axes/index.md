---
title: Achsen
slug: Web/XPath/Axes
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Es gibt dreizehn verschiedene Achsen in der [XPath](/de/docs/Web/XPath) Spezifikation. Eine Achse repräsentiert eine Beziehung zum Kontextknoten und wird verwendet, um Knoten relativ zu diesem Knoten im Baum zu lokalisieren.

Für weitere Informationen zur Verwendung von XPath-Ausdrücken siehe den [Zum Weiterlesen](/de/docs/Web/XSLT/Guides/Transforming_XML_with_XSLT/For_Further_Reading) Abschnitt des [Transformieren von XML mit XSLT](/de/docs/Web/XSLT/Guides/Transforming_XML_with_XSLT) Leitfadens. Siehe auch die ['Achsen'-Sektion in der xpath Spezifikation](https://www.w3.org/TR/xpath-30/#axes).

- `ancestor`
  - : Bezeichnet alle Vorfahren des Kontextknotens, beginnend mit dem Elterknoten und weiter bis zum Wurzelknoten.
- `ancestor-or-self`
  - : Bezeichnet den Kontextknoten und all seine Vorfahren, einschließlich des Wurzelknotens.
- `attribute`
  - : Bezeichnet die Attribute des Kontextknotens. Nur Elemente haben Attribute. Diese Achse kann mit dem At-Zeichen (`@`) abgekürzt werden.
- `child`
  - : Bezeichnet die Kinder des Kontextknotens. Wenn ein XPath-Ausdruck keine Achse angibt, wird dies standardmäßig verstanden. Da nur der Wurzelknoten oder Elementknoten Kinder haben, wird jede andere Verwendung nichts auswählen.
- `descendant`
  - : Bezeichnet alle Kinder des Kontextknotens und alle ihrer Kinder und so weiter. Attribut- und Namespace-Knoten sind **nicht** enthalten - der `parent` eines `attribute`-Knotens ist ein Elementknoten, aber `attribute`-Knoten sind nicht die Kinder ihrer Eltern.
- `descendant-or-self`
  - : Bezeichnet den Kontextknoten und all seine Nachkommen. Attribut- und Namespace-Knoten sind **nicht** enthalten - der `parent` eines `attribute`-Knotens ist ein Elementknoten, aber `attribute`-Knoten sind nicht die Kinder ihrer Eltern.
- `following`
  - : Bezeichnet alle Knoten, die nach dem Kontextknoten erscheinen, außer `descendant`, `attribute` und `namespace` Knoten.
- `following-sibling`
  - : Bezeichnet alle Knoten, die denselben Elter wie der Kontextknoten haben und nach dem Kontextknoten im Quelldokument erscheinen.
- `namespace` _(nicht unterstützt)_
  - : Bezeichnet alle Knoten, die im Gültigkeitsbereich des Kontextknotens sind. In diesem Fall muss der Kontextknoten ein Elementknoten sein.
- `parent`
  - : Bezeichnet den einzelnen Knoten, der das Elternelement des Kontextknotens ist. Es kann als zwei Punkte (`..`) abgekürzt werden.
- `preceding`
  - : Bezeichnet alle Knoten, die dem Kontextknoten im Dokument vorausgehen, mit Ausnahme von `ancestor`, `attribute` und `namespace` Knoten.
- `preceding-sibling`
  - : Bezeichnet alle Knoten, die denselben Elter wie der Kontextknoten haben und vor dem Kontextknoten im Quelldokument erscheinen.
- `self`
  - : Bezeichnet den Kontextknoten selbst. Es kann als ein einzelner Punkt (`.`) abgekürzt werden.
