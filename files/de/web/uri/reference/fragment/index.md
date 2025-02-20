---
title: URI-Fragment
short-title: Fragment
slug: Web/URI/Reference/Fragment
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

Das **Fragment** einer URI ist der letzte Teil der URI, der mit dem `#`-Zeichen beginnt. Es wird verwendet, um einen spezifischen Teil der Ressource zu identifizieren, wie z. B. einen Abschnitt eines Dokuments oder eine Position in einem Video. Das Fragment wird nicht an den Server gesendet, wenn die URI angefordert wird, sondern es wird vom Client (wie dem Browser) nach dem Abrufen der Ressource verarbeitet.

## Syntax

```url
#fragment
```

- `fragment`
  - : Eine Folge beliebiger Zeichen. Das genaue Format des Fragments wird von der Ressource selbst definiert. Einige häufige Beispiele:
    - In einem HTML-Dokument kann es sich um das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut eines Elements handeln, und der Browser scrollt zu diesem Element.
    - Es kann sich um ein [Textfragment](/de/docs/Web/URI/Reference/Fragment/Text_fragments) in der Form `#:~:text=...` handeln, wodurch der Browser den angegebenen Text hervorhebt.
    - Es kann sich um ein [Medienfragment](https://www.w3.org/TR/media-frags/) in der Form `#t=...` handeln, wodurch das Video oder Audio ab dieser Zeit abgespielt wird.

## Beispiele

- `#syntax`
  - : Der Browser scrollt zu dem Element mit der `id="syntax"` im Dokument (was für diese Seite die Überschrift [Syntax](#syntax) ist).
- `#:~:text=fragment`
  - : Der Browser wird den Text [`fragment`](#:~:text=fragment) im Dokument hervorheben.
- `#t=10,20`
  - : Das Video oder Audio wird ab der 10. Sekunde abgespielt.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
