---
title: URI-Fragment
short-title: Fragment
slug: Web/URI/Reference/Fragment
l10n:
  sourceCommit: d54f8c9ecfbafc35915330ac4e26a09d93d814e8
---

Das **Fragment** einer URI ist der letzte Teil der URI, beginnend mit dem `#`-Zeichen. Es wird verwendet, um einen bestimmten Teil der Ressource zu identifizieren, wie zum Beispiel einen Abschnitt eines Dokuments oder eine Position in einem Video. Das Fragment wird nicht an den Server gesendet, wenn die URI angefordert wird, sondern es wird vom Client (wie dem Browser) nach dem Abrufen der Ressource verarbeitet.

## Syntax

```url
#fragment
```

- `fragment`
  - : Eine Folge von beliebigen Zeichen. Das genaue Format des Fragments wird von der Ressource selbst definiert. Einige häufige Beispiele:
    - In einem HTML-Dokument kann es das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut eines Elements sein, und der Browser scrollt zu diesem Element.
    - Es kann ein [Textfragment](/de/docs/Web/URI/Reference/Fragment/Text_fragments) in der Form von `#:~:text=...` sein, das den Browser veranlasst, den angegebenen Text hervorzuheben.
    - Es kann ein [Medienfragment](https://www.w3.org/TR/media-frags/) in der Form von `#t=...` sein, das dazu führt, dass das Video oder Audio ab diesem Zeitpunkt zu spielen beginnt.

## Beispiele

- `#syntax`
  - : Der Browser wird zu dem Element mit dem `id="syntax"` im Dokument scrollen (was für diese Seite die [Syntax](#syntax)-Überschrift ist).
- `#:~:text=fragment`
  - : Der Browser wird den Text [`fragment`](#:~:text=fragment) im Dokument hervorheben.
- `#t=10,20`
  - : Das Video oder Audio wird ab der 10. Sekunde abgespielt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
