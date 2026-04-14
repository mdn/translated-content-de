---
title: "HTML-Attribut: integrity"
short-title: integrity
slug: Web/HTML/Reference/Attributes/integrity
l10n:
  sourceCommit: fef6630e9b90f9794d3194ea8389ff70599c6884
---

Das **`integrity`**-Attribut bietet Entwicklern eine Möglichkeit zu bestätigen, dass ein verlinktes Skript oder Stylesheet einen bestimmten Inhalt haben muss. Der Browser überprüft, ob die Ressource tatsächlich diesen Inhalt hat, und lehnt das Laden der Ressource ab, wenn dies nicht der Fall ist.

Dies ist ein Schutz gegen einen [Supply-Chain-Angriff](/de/docs/Web/Security/Attacks/Supply_chain_attacks), bei dem ein Angreifer Zugriff auf die Domain erhält, die das Skript oder Stylesheet bereitstellt, und die erwartete Ressource durch eine bösartige ersetzt.

## Beschreibung

Das Attribut kann nur auf {{htmlelement("script")}}- oder {{htmlelement("link")}}-Elemente angewendet werden.

Das Attribut besteht aus einer oder mehreren Komponenten, von denen jede aus Folgendem besteht:

- Einem Bezeichner für eine {{Glossary("hash_function", "kryptografische Hash-Funktion")}}. Drei Hash-Funktionen werden unterstützt. In aufsteigender Reihenfolge der Stärke sind dies: SHA-256, SHA-384 und SHA-512.
- Das Ergebnis des Hashings der Ressourceninhalte mit der angegebenen Hash-Funktion.

Wenn der Browser eine Ressource herunterlädt, bei der das `integrity`-Attribut gesetzt ist, wählt er zuerst die Menge der Hashes aus, die mit der stärksten vorhandenen Hash-Funktion generiert wurde. Das heißt, wenn das Attribut Werte enthält, die mit SHA-256 und SHA-384 generiert wurden, verwendet es nur die mit SHA-384 erzeugten Hashes.

Der Browser wird dann den Hash der Ressourceninhalte mit der angegebenen Funktion berechnen und das Ergebnis mit allen angegebenen Werten vergleichen: Wenn der tatsächliche Wert mit einem der angegebenen Werte übereinstimmt, lädt der Browser die Ressource, andernfalls lehnt er das Laden der Ressource ab.

Für weitere Details, siehe unseren Leitfaden zu [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity).

## Werte

Der Wert dieses Attributs besteht aus einer durch Leerzeichen getrennten Liste von Komponenten, von denen jede eine der folgenden Formen hat:

- `sha256-HASH_WERT`
- `sha384-HASH_WERT`
- `sha512-HASH_WERT`

In jedem Fall identifiziert der Teil vor dem `-` die verwendete {{Glossary("hash_function", "Hash-Funktion")}}, und `HASH_WERT` ist die {{Glossary("base64", "base64")}}-Kodierung des Ergebnisses des Hashens der Ressource mit der angegebenen Hash-Funktion.

## Beispiele

### Einbeziehung verschiedener Hash-Funktionen

Das folgende {{htmlelement("script")}}-Element enthält ein `integrity`-Attribut, das drei Werte enthält: einen berechnet mit SHA-256, einen berechnet mit SHA-384, und einen berechnet mit SHA-512.

Der Browser wählt den Wert, der mit dem stärksten vom Browser unterstützten Algorithmus berechnet wurde. Da alle modernen Browser SHA-512 unterstützen, bedeutet dies, dass der Browser den `sha512-` Wert auswählen wird. Er wird die Dateiinhalte mit SHA-512 hashen und das Ergebnis mit dem `sha512-` Wert vergleichen und die Datei nur laden, wenn sie übereinstimmen.

In diesem Fall ermöglicht die Bereitstellung mehrerer Werte einer Website das Arbeiten mit Browsern, die möglicherweise nicht alle Hash-Funktionen unterstützen.

```html
<script
  src="https://cdn.example.com/script.js"
  integrity="
  sha256-NmUxNTFiMDUzZGIwZjcwZDIyYTc5NTA4ZmQyNT
  sha384-Tk2Yjg3YmYzMWNkZTdhMTFkM2FlNDg4ZjE3MzEzNTk3ZDlh
  sha512-OGUwYThkZDc2YzFlZGI5MDEzZmZhMGFkMGQ0OTQ3MzZkNGYZTEzODk2"
  crossorigin="anonymous"></script>
```

Beachten Sie, dass in diesem und den nachfolgenden Beispielen die Hash-Werte verkürzt wurden, um die Übersichtlichkeit zu bewahren.

### Einbeziehung verschiedener Hash-Werte

Das folgende {{htmlelement("script")}}-Element enthält ein `integrity`-Attribut, das zwei verschiedene Werte enthält, beide mit dem SHA-512-Algorithmus berechnet. Diese verschiedenen Werte spiegeln alternative Inhalte für die verlinkte Datei wider.

Wenn der SHA-512-Hash der verlinkten Datei mit einem der angegebenen Werte übereinstimmt, lädt der Browser sie.

Dies ermöglicht dem Server bei `cdn.example.com`, mit einer von zwei Versionen der Datei zu antworten.

```html
<script
  src="https://cdn.example.com/script.js"
  integrity="
  sha512-ZmQ5NjNiYWJjYTM3MjRhMGI4MTQzNWRmZTZkZGYyMzQyOGYYTZkYjBm
  sha512-OGUwYThkZDc2YzFlZGI5MDEzZmZhMGFkMGQ0OTQ3MzZkNGYZTEzODk2"
  crossorigin="anonymous"></script>
```

### Einbeziehung von `integrity` bei `<link>`-Elementen

Das folgende {{htmlelement("link")}}-Element lädt ein Stylesheet und enthält ein `integrity`-Attribut mit sechs Werten, die zwei mögliche Inhalte für die verlinkte Datei widerspiegeln, jeweils berechnet mit drei verschiedenen Hash-Funktionen.

Der Browser wählt die Menge der Werte, die mit der stärksten unterstützten Hash-Funktion berechnet wurden: in modernen Browsern werden dies die beiden `sha512-` Werte sein.

Er wird dann den Hash der heruntergeladenen Datei mit SHA-512 berechnen und das Ergebnis mit beiden `sha512-` Werten vergleichen: wenn einer von ihnen übereinstimmt, lädt der Browser die Ressource.

```html
<link
  rel="stylesheet"
  href="https://cdn.example.com/style.css"
  integrity="
  sha256-NmUxNTFiMDUzZGIwZjcwZDIyYTc5NTA4ZmQyNT
  sha256-OTcyMGZkY2Y3NGZhZjUwNWU5NGQ0ZWJhYWVhND
  sha384-Tk2Yjg3YmYzMWNkZTdhMTFkM2FlNDg4ZjE3MzEzNTk3ZDlh
  sha384-ZTdhYjQ2NTE5OTg0Yjc2ZDU2MDMxMDUxY2Y5NDMxYzI5NjA
  sha512-OGUwYThkZDc2YzFlZGI5MDEzZmZhMGFkMGQ0OTQ3MzZkNGYZTEzODk2
  sha512-IxZTcwZjE2ZjU3MzE4NWM5ODU4ZmJkYjBlYzBhYzFkYzU0OGJmM2ZkN"
  crossorigin="anonymous" />
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity)
- [Supply-Chain-Angriffe](/de/docs/Web/Security/Attacks/Supply_chain_attacks)
