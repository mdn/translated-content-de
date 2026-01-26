---
title: URI-Fragment
short-title: Fragment
slug: Web/URI/Reference/Fragment
l10n:
  sourceCommit: f8ef875113a7d3e9952f41de68be1e3a3a1e6988
---

Das **Fragment** eines URI ist der letzte Teil des URI, beginnend mit dem Zeichen `#`. Es wird verwendet, um einen bestimmten Teil der Ressource zu identifizieren, wie z.B. einen Abschnitt eines Dokuments oder eine Position in einem Video. Das Fragment wird beim Anfordern des URI nicht an den Server gesendet, sondern vom Client (wie etwa dem Browser) verarbeitet, nachdem die Ressource abgerufen wurde.

## Syntax

```url
#fragment
```

- `fragment`
  - : Eine Folge beliebiger Zeichen.
    Das genaue Format des Fragments wird von der Ressource selbst definiert.

## Beschreibung

Betrachten Sie die folgende URL:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

`#SomewhereInTheDocument` ist das _Fragment_ der URL, das einen Anker zu einem anderen Teil der Ressource darstellt. Ein Anker repräsentiert eine Art "Lesezeichen" innerhalb der Ressource und gibt dem Browser die Anweisung, den Inhalt an dieser Stelle anzuzeigen. In einem HTML-Dokument wird der Browser beispielsweise zu dem Punkt scrollen, an dem der Anker definiert ist. Dies kann das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut eines Elements sein, und der Browser wird zu diesem Element scrollen. In einem Video- oder Audio-Dokument kann es sich um ein [Media Fragment](https://www.w3.org/TR/media-frags/) in Form von `#t=...` handeln, das das Video oder Audio ab einem bestimmten Zeitpunkt abspielen lässt.

Es gibt eine spezielle [Textfragment](/de/docs/Web/URI/Reference/Fragment/Text_fragments)-Funktion, die es ermöglicht, auf einen bestimmten Teil einer Webseite zu verlinken, der durch seinen Textinhalt identifiziert wird.

## Beispiele

- `#syntax`
  - : Der Browser wird zu dem Element mit `id="syntax"` im Dokument scrollen (was für diese Seite die Überschrift [Syntax](#syntax) ist).
- `#:~:text=fragment`
  - : Der Browser wird den Text [`fragment`](#:~:text=fragment) im Dokument hervorheben; sehen Sie [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) für weitere Details.
- `#t=10,20`
  - : Das Video oder Audio wird ab der 10. Sekunde abgespielt; sehen Sie [Medienfragmente](/de/docs/Web/URI/Reference/Fragment/Media_fragments) für weitere Details.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
- [Medienfragmente](/de/docs/Web/URI/Reference/Fragment/Media_fragments)
