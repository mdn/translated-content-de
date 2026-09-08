---
title: "Content-Security-Policy: report-uri-Direktive"
short-title: report-uri
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri
l10n:
  sourceCommit: 8f567ac62deb241e61b525d36088d626fc6a8a84
---

> [!WARNING]
> Die {{CSP("report-to")}}-Direktive soll `report-uri` ersetzen, und in Browsern, die `report-to` unterstützen, wird die `report-uri`-Direktive ignoriert.
>
> Solange `report-to` jedoch nicht umfassend unterstützt wird, können Sie beide Header wie gezeigt angeben:
>
> ```http
> Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
> ```

Die veraltete HTTP-{{HTTPHeader("Content-Security-Policy")}}-Direktive (CSP) **`report-uri`** weist den User-Agent an, Versuche zu melden, die Content Security Policy zu verletzen.
Diese Verletzungsberichte bestehen aus [JSON-Dokumenten](#syntax-des-verletzungsberichts), die über eine HTTP-`POST`-Anfrage an die angegebene URI gesendet werden.

Die Direktive hat für sich allein keine Wirkung, sondern erhält ihre Bedeutung nur in Kombination mit anderen Direktiven.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Reporting_directive", "Meldedirektive")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Diese Direktive wird im {{HTMLElement("meta")}}-Element nicht unterstützt.
      </th>
    </tr>
  </tbody>
</table>

## Syntax

```http
Content-Security-Policy: report-uri <uri>;
Content-Security-Policy: report-uri <uri> <uri>;
```

- \<uri>
  - : Eine URI, die angibt, wohin der Bericht gesendet werden muss.

### Syntax des Verletzungsberichts

Das JSON-Objekt des Berichts wird über eine HTTP-`POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report` gesendet.

> [!NOTE]
> Verletzungsberichte sollten als vom Angreifer kontrollierte Daten betrachtet werden.
> Der Inhalt sollte vor dem Speichern oder Rendern ordnungsgemäß bereinigt werden.
> Dies gilt insbesondere für die Eigenschaft [script-sample](#script-sample), falls sie bereitgestellt wird.

Das JSON-Objekt des Berichts hat eine einzelne Eigenschaft der obersten Ebene, `"csp-report"`, die ein Objekt mit den folgenden Eigenschaften enthält:

- `blocked-uri`
  - : Die URI der Ressource, deren Laden durch die Content Security Policy blockiert wurde.
    Wenn die blockierte URI einen anderen Origin als `document-uri` hat, wird die blockierte URI so gekürzt, dass sie nur Schema, Host und Port enthält.
- `disposition`
  - : Entweder `"enforce"` oder `"report"`, je nachdem, ob der Header {{HTTPHeader("Content-Security-Policy-Report-Only")}} oder der Header `Content-Security-Policy` verwendet wird.
- `document-uri`
  - : Die URI des Dokuments, in dem die Verletzung aufgetreten ist.
- `effective-directive`
  - : Die Direktive, deren Durchsetzung die Verletzung verursacht hat.
    Einige Browser können andere Werte bereitstellen, etwa Chrome mit `style-src-elem`/`style-src-attr`, selbst wenn die durchgesetzte Direktive `style-src` war.
- `original-policy`
  - : Die ursprüngliche Richtlinie, wie sie durch den HTTP-Header `Content-Security-Policy` angegeben wurde.
- `referrer` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Der Referrer des Dokuments, in dem die Verletzung aufgetreten ist.
- `script-sample`
  - : Die ersten 40 Zeichen des Inline-Skripts, Event-Handlers oder Stils, der die Verletzung verursacht hat.
    Verletzungen, die aus externen Dateien stammen, werden nicht in den Bericht aufgenommen.

    Dies gilt nur für Verletzungen von [`script-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) und [`style-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src), wenn die entsprechende `Content-Security-Policy`-Direktive das Schlüsselwort [`'report-sample'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample) enthält.

- `status-code`
  - : Der HTTP-Statuscode der Ressource, auf der das globale Objekt instanziiert wurde.
- `violated-directive` {{deprecated_inline}}
  - : Die Direktive, deren Durchsetzung die Verletzung verursacht hat. `violated-directive` ist eine historische Bezeichnung für das Feld `effective-directive` und enthält denselben Wert.

## Beispiele

### CSP-Verletzungsbericht mit Content-Security-Policy

Betrachten wir eine Seite unter `http://example.com/signup.html`.
Sie verwendet die folgende Richtlinie, die alles außer Stylesheets verbietet, die von `cdn.example.com` geladen werden.

```http
Content-Security-Policy: default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports
```

Das HTML von `signup.html` sieht wie folgt aus:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Sign Up</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    Here be content.
  </body>
</html>
```

Erkennen Sie den Fehler? Stylesheets dürfen nur von `cdn.example.com` geladen werden, die Website versucht jedoch, eines von ihrem eigenen Origin (`http://example.com`) zu laden.
Ein Browser, der CSP durchsetzen kann, würde beim Aufruf des Dokuments den folgenden Verletzungsbericht als `POST`-Anfrage an `http://example.com/_/csp-reports` senden:

```json
{
  "csp-report": {
    "blocked-uri": "http://example.com/css/style.css",
    "disposition": "enforce",
    "document-uri": "http://example.com/signup.html",
    "effective-directive": "style-src-elem",
    "original-policy": "default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports",
    "referrer": "",
    "status-code": 200,
    "violated-directive": "style-src-elem"
  }
}
```

Wie Sie sehen können, enthält der Bericht in `blocked-uri` den vollständigen Pfad zur Ressource, die die Verletzung verursacht.
Dies ist nicht immer der Fall.
Wenn `signup.html` beispielsweise versuchen würde, CSS von `http://anothercdn.example.com/stylesheet.css` zu laden, würde der Browser den vollständigen Pfad _nicht_ aufnehmen, sondern nur den Origin
(`http://anothercdn.example.com`), um das Offenlegen sensibler Informationen über Cross-Origin-Ressourcen zu verhindern.
Die CSP-Spezifikation [liefert eine Erklärung](https://w3c.github.io/webappsec-csp/#security-violation-reports) für dieses Verhalten.

### CSP-Verletzungsbericht mit Content-Security-Policy-Report-Only

Die `report-uri`-Direktive kann auch mit dem Antwort-Header {{httpheader("Content-Security-Policy-Report-Only")}} verwendet werden.
Dieser Header ermöglicht es dem Browser, Verletzungen beim Testen zu melden, aber nicht zu blockieren.

Der HTTP-Header wäre weitgehend derselbe.

```http
Content-Security-Policy-Report-Only: default-src 'none'; style-src cdn.example.com; report-to /_/csp-reports
```

Der Bericht wäre bis auf die Disposition `"report"` und natürlich die `"original-policy"` derselbe:

```json
{
  "csp-report": {
    "blocked-uri": "http://example.com/css/style.css",
    "disposition": "report",
    "document-uri": "http://example.com/signup.html",
    "effective-directive": "style-src-elem",
    "original-policy": "default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports",
    "referrer": "",
    "status-code": 200,
    "violated-directive": "style-src-elem"
  }
}
```

### Protokollierung von CSP-Verletzungen

Angenommen, ein Server sendet Antworten mit dem folgenden `Content-Security-Policy`-Header:

```http
Content-Security-Policy: default-src https:; report-uri /csp-violation-report-endpoint/
```

`/csp-violation-report-endpoint/` könnte beispielsweise ein PHP-Skript wie das folgende ausführen, das das JSON mit Details zur Verletzung protokolliert und, wenn die Verletzung die erste zum Protokolldatei hinzugefügte ist, eine E-Mail an einen Administrator sendet:

```php
<?php

// Start configure
$log_file = dirname(__FILE__) . "/csp-violations.log";
$log_file_size_limit = 1000000; // bytes - once exceeded no further entries are added
$email_address = "admin@example.com";
$email_subject = "Content-Security-Policy violation";
// End configuration

$current_domain = preg_replace("/www\./i", "", $_SERVER["SERVER_NAME"]);
$email_subject = $email_subject . " on " . $current_domain;

http_response_code(204); // HTTP 204 No Content

$json_data = file_get_contents("php://input");

// We pretty print the JSON before adding it to the log file
if (($json_data = json_decode($json_data))) {
  $json_data = json_encode(
    $json_data,
    JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES,
  );

  if (!file_exists($log_file)) {
    // Send an email
    $message =
      "The following Content-Security-Policy violation occurred on " .
      $current_domain . ":\n\n" .
      $json_data .
      "\n\nFurther CPS violations will be logged to the following log file, but no further email notifications will be sent until this log file is deleted:\n\n" .
      $log_file;
    mail(
      $email_address,
      $email_subject,
      $message,
      "Content-Type: text/plain;charset=utf-8",
    );
  } else if (filesize($log_file) > $log_file_size_limit) {
    exit(0);
  }

  file_put_contents($log_file, $json_data, FILE_APPEND | LOCK_EX);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- {{CSP("report-to")}}
