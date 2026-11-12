---
title: HTML-Attribut `integrity`
short-title: integrity
slug: Web/HTML/Reference/Attributes/integrity
l10n:
  sourceCommit: d16355b5ec024c990cff93dc36232c95d944bfce
---

Das Attribut **`integrity`** bietet Entwicklern eine Möglichkeit festzulegen, welchen Inhalt ein eingebundenes Skript oder Stylesheet haben muss. Der Browser prüft, ob die Ressource tatsächlich diesen Inhalt hat, und lädt sie andernfalls nicht.

Dies schützt vor einem [Supply-Chain-Angriff](/de/docs/Web/Security/Attacks/Supply_chain_attacks), bei dem ein Angreifer Zugriff auf die Domain erhält, die das Skript oder Stylesheet bereitstellt, und die erwartete Ressource durch eine schädliche ersetzt.

## Werte

Der Wert dieses Attributs besteht aus einer durch Leerraum getrennten Liste von Komponenten. Jede Komponente hat eine der folgenden Formen:

- `sha256-HASH_VALUE`
- `sha384-HASH_VALUE`
- `sha512-HASH_VALUE`

Der Teil vor `-` bezeichnet jeweils die verwendete {{Glossary("hash_function", "Hashfunktion")}}. `HASH_VALUE` ist die {{Glossary("base64", "Base64")}}-Kodierung des Ergebnisses, das beim Hashen der Ressource mit der angegebenen Hashfunktion entsteht.

## Beschreibung

Das Attribut kann nur auf {{htmlelement("script")}}- oder {{htmlelement("link")}}-Elemente angewendet werden.

Es besteht aus einer oder mehreren Komponenten, die jeweils Folgendes enthalten:

- Eine Kennung für eine {{Glossary("hash_function", "kryptografische Hashfunktion")}}. Drei Hashfunktionen werden unterstützt: SHA-256, SHA-384 und SHA-512, in dieser Reihenfolge mit zunehmender Stärke.
- Das Ergebnis des Hashens des Ressourceninhalts mit der angegebenen Hashfunktion.

Wenn der Browser eine Ressource herunterlädt, für die das Attribut `integrity` gesetzt ist, wählt er zunächst die Hashwerte aus, die mit der stärksten im Attribut vertretenen Hashfunktion erzeugt wurden. Enthält das Attribut beispielsweise Werte für SHA-256 und SHA-384, verwendet er nur die mit SHA-384 erzeugten Hashwerte.

Anschließend berechnet der Browser mit der entsprechenden Funktion den Hashwert des Ressourceninhalts und vergleicht das Ergebnis mit allen ausgewählten Werten. Stimmt der berechnete Wert mit einem davon überein, lädt der Browser die Ressource. Andernfalls lädt er sie nicht.

Weitere Einzelheiten finden Sie in unserem Leitfaden zur [Subresource Integrity](/de/docs/Web/Security/Defenses/Subresource_Integrity).

## Beispiele

### Verschiedene Hashfunktionen angeben

Das folgende {{htmlelement("script")}}-Element enthält ein `integrity`-Attribut mit drei Werten: einem mit SHA-256 berechneten, einem mit SHA-384 berechneten und einem mit SHA-512 berechneten Wert.

Der Browser wählt den Wert aus, der mit dem stärksten von ihm unterstützten Algorithmus berechnet wurde. Da alle modernen Browser SHA-512 unterstützen, wählt er den `sha512-`-Wert aus. Er hasht den Dateiinhalt mit SHA-512, vergleicht das Ergebnis mit dem `sha512-`-Wert und lädt die Datei nur, wenn beide übereinstimmen.

Mehrere Werte ermöglichen es in diesem Fall, dass eine Website auch mit Browsern funktioniert, die möglicherweise nicht alle Hashfunktionen unterstützen.

```html
<script
  src="https://cdn.example.com/script.js"
  integrity="
  sha256-NmUxNTFiMDUzZGIwZjcwZDIyYTc5NTA4ZmQyNT
  sha384-Tk2Yjg3YmYzMWNkZTdhMTFkM2FlNDg4ZjE3MzEzNTk3ZDlh
  sha512-OGUwYThkZDc2YzFlZGI5MDEzZmZhMGFkMGQ0OTQ3MzZkNGYZTEzODk2"
  crossorigin="anonymous"></script>
```

Beachten Sie, dass die beispielhaften Hashwerte hier und in den folgenden Beispielen der Kürze halber gekürzt wurden.

### Verschiedene Hashwerte angeben

Das folgende {{htmlelement("script")}}-Element enthält ein `integrity`-Attribut mit zwei unterschiedlichen Werten, die beide mit dem SHA-512-Algorithmus berechnet wurden. Die unterschiedlichen Werte stehen für alternative Inhalte der eingebundenen Datei.

Wenn der SHA-512-Hashwert der eingebundenen Datei mit einem der angegebenen Werte übereinstimmt, lädt der Browser sie.

So kann der Server unter `cdn.example.com` eine von zwei Versionen der Datei ausliefern.

```html
<script
  src="https://cdn.example.com/script.js"
  integrity="
  sha512-ZmQ5NjNiYWJjYTM3MjRhMGI4MTQzNWRmZTZkZGYyMzQyOGYYTZkYjBm
  sha512-OGUwYThkZDc2YzFlZGI5MDEzZmZhMGFkMGQ0OTQ3MzZkNGYZTEzODk2"
  crossorigin="anonymous"></script>
```

### `integrity` bei `<link>`-Elementen verwenden

Das folgende {{htmlelement("link")}}-Element lädt ein Stylesheet und enthält ein `integrity`-Attribut mit sechs Werten. Diese stehen für zwei mögliche Inhalte der eingebundenen Datei, für die jeweils mit drei verschiedenen Hashfunktionen Werte berechnet wurden.

Der Browser wählt die Werte aus, die mit der stärksten von ihm unterstützten Hashfunktion berechnet wurden. In modernen Browsern sind das die beiden `sha512-`-Werte.

Anschließend berechnet er mit SHA-512 den Hashwert der heruntergeladenen Datei und vergleicht das Ergebnis mit beiden `sha512-`-Werten. Stimmt es mit einem davon überein, lädt der Browser die Ressource.

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
