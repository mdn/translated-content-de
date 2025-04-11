---
title: URI-Fragmente
short-title: Fragment
slug: Web/URI/Reference/Fragment
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Das **Fragment** einer URI ist der letzte Teil der URI, beginnend mit dem `#`-Zeichen. Es wird verwendet, um einen spezifischen Teil der Ressource zu identifizieren, wie z. B. einen Abschnitt eines Dokuments oder eine Position in einem Video. Das Fragment wird nicht an den Server gesendet, wenn die URI angefordert wird, sondern es wird vom Client (wie dem Browser) verarbeitet, nachdem die Ressource abgerufen wurde.

## Syntax

```url
#fragment
```

- `fragment`
  - : Eine Folge von beliebigen Zeichen. Das genaue Format des Fragments wird von der Ressource selbst definiert. Einige gängige Beispiele:
    - In einem HTML-Dokument kann es das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut eines Elements sein, und der Browser wird zu diesem Element scrollen.
    - Es kann ein [Text-Fragment](/de/docs/Web/URI/Reference/Fragment/Text_fragments) in der Form von `#:~:text=...` sein, wodurch der Browser den angegebenen Text hervorhebt.
    - Es kann ein [Media-Fragment](https://www.w3.org/TR/media-frags/) in der Form von `#t=...` sein, wodurch das Video oder Audio ab dieser Zeit zu spielen beginnt.

## Beispiele

- `#syntax`
  - : Der Browser wird zu dem Element mit `id="syntax"` im Dokument scrollen (welches für diese Seite der [Syntax](#syntax)-Abschnitt ist).
- `#:~:text=fragment`
  - : Der Browser wird den Text [`fragment`](#:~:text=fragment) im Dokument hervorheben.
- `#t=10,20`
  - : Das Video oder Audio wird ab der 10. Sekunde beginnen zu spielen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Text-Fragmenten](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
