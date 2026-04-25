---
title: "`integrity` HTML-Attribut"
short-title: integrity
slug: Web/HTML/Reference/Attributes/integrity
l10n:
  sourceCommit: b50ed7ac1c2ca21b4b5cfb594474a17da3f2e6c2
---

Das **`integrity`**-Attribut bietet Entwicklern einen Mechanismus, um zu gewährleisten, dass ein verlinktes Skript oder Stylesheet einen bestimmten Inhalt haben muss. Der Browser überprüft, ob die Ressource tatsächlich diesen Inhalt hat, und verweigert das Laden der Ressource, wenn sie nicht übereinstimmt.

Dies ist eine Verteidigungsmaßnahme gegen einen [Supply-Chain-Angriff](/de/docs/Web/Security/Attacks/Supply_chain_attacks), bei dem ein Angreifer Zugriff auf die Domain erhält, die das Skript oder Stylesheet bereitstellt, und die erwartete Ressource durch eine bösartige ersetzt.

## Beschreibung

Das Attribut kann nur auf {{htmlelement("script")}}- oder {{htmlelement("link")}}-Elemente angewendet werden.

Das Attribut besteht aus einer oder mehreren Komponenten, von denen jede aus Folgendem besteht:

- Einem Identifikator für eine {{Glossary("hash_function", "kryptografische Hash-Funktion")}}. Drei Hash-Funktionen werden unterstützt. In aufsteigender Reihenfolge ihrer Stärke sind dies: SHA-256, SHA-384 und SHA-512.
- Dem Ergebnis der Hash-Berechnung des Ressourceninhalts mit der angegebenen Hash-Funktion.

Wenn der Browser eine Ressource mit gesetztem `integrity`-Attribut herunterlädt, wählt er zuerst die Gruppe von Hashes aus, die mit der stärksten vorhandenen Hash-Funktion generiert wurden. Das heißt, wenn das Attribut Werte enthält, die mit SHA-256 und SHA-384 generiert wurden, werden nur die mit SHA-384 generierten Hashes verwendet.

Der Browser berechnet dann den Hash der Ressourceninhalte mit der angegebenen Funktion und vergleicht das Ergebnis mit allen angegebenen Werten: Wenn der tatsächliche Wert mit einem der angegebenen Werte übereinstimmt, lädt der Browser die Ressource, andernfalls verweigert er das Laden der Ressource.

Für weitere Details siehe unseren Leitfaden zur [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity).

## Werte

Der Wert dieses Attributs besteht aus einer durch Leerzeichen getrennten Liste von Komponenten, die jede der folgenden Formen haben kann:

- `sha256-HASH_WERT`
- `sha384-HASH_WERT`
- `sha512-HASH_WERT`

In jedem Fall identifiziert der Teil vor dem `-` die verwendete {{Glossary("hash_function", "Hash-Funktion")}}, und `HASH_WERT` ist die {{Glossary("base64", "base64")}}-Kodierung des Ergebnisses der Hash-Berechnung der Ressource mit der angegebenen Hash-Funktion.

## Beispiele

### Integrieren verschiedener Hash-Funktionen

Das folgende {{htmlelement("script")}}-Element enthält ein `integrity`-Attribut mit drei Werten: einem, der mit SHA-256 berechnet wurde, einem, der mit SHA-384 berechnet wurde, und einem, der mit SHA-512 berechnet wurde.

Der Browser wird den Wert auswählen, der mit dem stärksten Algorithmus berechnet wurde, den der Browser unterstützt. Da alle modernen Browser SHA-512 unterstützen, bedeutet dies, dass der Browser den `sha512-` Wert auswählt. Er wird dann die Dateiinhalte mit SHA-512 hashen und das Ergebnis mit dem `sha512-` Wert vergleichen und die Datei nur laden, wenn sie übereinstimmen.

Das Bereitstellen mehrerer Werte ermöglicht es einer Website, mit Browsern zu arbeiten, die möglicherweise nicht alle Hash-Funktionen unterstützen.

```html
<script
  src="https://cdn.example.com/script.js"
  integrity="
  sha256-NmUxNTFiMDUzZGIwZjcwZDIyYTc5NTA4ZmQyNT
  sha384-Tk2Yjg3YmYzMWNkZTdhMTFkM2FlNDg4ZjE3MzEzNTk3ZDlh
  sha512-OGUwYThkZDc2YzFlZGI5MDEzZmZhMGFkMGQ0OTQ3MzZkNGYZTEzODk2"
  crossorigin="anonymous"></script>
```

Beachten Sie, dass wir in diesem und den nachfolgenden Beispielen die Beispiel-Hash-Werte aus Gründen der Kürze gekürzt haben.

### Integrieren verschiedener Hash-Werte

Das folgende {{htmlelement("script")}}-Element enthält ein `integrity`-Attribut mit zwei verschiedenen Werten, die beide mit dem SHA-512-Algorithmus berechnet wurden. Diese verschiedenen Werte spiegeln alternative Inhalte für die verlinkte Datei wider.

Wenn der SHA-512-Hash der verlinkten Datei mit einem der angegebenen Werte übereinstimmt, wird der Browser sie laden.

Dies ermöglicht es dem Server bei `cdn.example.com`, mit einer von zwei Versionen der Datei zu antworten.

```html
<script
  src="https://cdn.example.com/script.js"
  integrity="
  sha512-ZmQ5NjNiYWJjYTM3MjRhMGI4MTQzNWRmZTZkZGYyMzQyOGYYTZkYjBm
  sha512-OGUwYThkZDc2YzFlZGI5MDEzZmZhMGFkMGQ0OTQ3MzZkNGYZTEzODk2"
  crossorigin="anonymous"></script>
```

### Einfügen von `integrity` auf `<link>`-Elementen

Das folgende {{htmlelement("link")}}-Element lädt ein Stylesheet und enthält ein `integrity`-Attribut mit sechs Werten, die zwei mögliche Inhalte für die verlinkte Datei widerspiegeln, jeweils berechnet mit drei verschiedenen Hash-Funktionen.

Der Browser wird die Gruppe von Werten auswählen, die mit der stärksten unterstützten Hash-Funktion berechnet wurden: in modernen Browsern werden dies die beiden `sha512-` Werte sein.

Er wird dann den Hash der heruntergeladenen Datei mit SHA-512 berechnen und das Ergebnis mit beiden `sha512-` Werten vergleichen: Wenn einer davon übereinstimmt, wird der Browser die Ressource laden.

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
