---
title: "CSP: report-uri"
slug: Web/HTTP/Headers/Content-Security-Policy/report-uri
l10n:
  sourceCommit: 6b4c6ac616502ec3378cfa5f42a9724d4e5a3f18
---

{{HTTPSidebar}}{{deprecated_header}}

> [!WARNING]
> Die {{CSP("report-to")}}-Direktive soll `report-uri` ersetzen, und in Browsern, die `report-to` unterstützen, wird die `report-uri`-Direktive ignoriert.
>
> Bis `report-to` jedoch breit unterstützt wird, können Sie beide Header spezifizieren, wie hier gezeigt:
>
> ```http
> Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
> ```

Die veraltete HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`report-uri`**-Direktive weist den Benutzeragenten an, Versuche zu melden, die Content-Security-Policy zu verletzen.
Diese Verletzungsberichte bestehen aus [JSON-Dokumenten](#verletzungsbericht-syntax), die über eine HTTP-`POST`-Anfrage an die angegebene URI gesendet werden.

Die Direktive hat an sich keine Wirkung, sondern erhält nur in Kombination mit anderen Direktiven eine Bedeutung.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Reporting directive")}}</td>
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

### Verletzungsbericht-Syntax

Das Bericht-JSON-Objekt wird über eine HTTP-`POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report` gesendet.

> [!NOTE] Verletzungsberichte sollten als angreifergesteuerte Daten betrachtet werden.
> Der Inhalt sollte ordnungsgemäß bereinigt werden, bevor er gespeichert oder dargestellt wird.
> Dies gilt insbesondere für die [script-sample](#script-sample)-Eigenschaft, falls angegeben.

Das Bericht-JSON-Objekt hat eine einzelne oberste Eigenschaft, `"csp-report"`, die ein Objekt mit den folgenden Eigenschaften enthält:

- `blocked-uri`
  - : Die URI der Ressource, die durch die Content Security Policy am Laden gehindert wurde.
    Wenn die blockierte URI von einem anderen Ursprung als die `document-uri` stammt, wird die blockierte URI abgeschnitten, sodass nur das Schema, der Host und der Port enthalten sind.
- `disposition`
  - : Entweder `"enforce"` oder `"report"`, je nachdem, ob der {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header oder der `Content-Security-Policy`-Header verwendet wird.
- `document-uri`
  - : Die URI des Dokuments, in dem die Verletzung aufgetreten ist.
- `effective-directive`
  - : Die Direktive, deren Durchsetzung die Verletzung verursacht hat.
    Einige Browser können unterschiedliche Werte bereitstellen, wie zum Beispiel Chrome, das `style-src-elem`/`style-src-attr` angibt, auch wenn die erzwungene Direktive `style-src` war.
- `original-policy`
  - : Die ursprüngliche Richtlinie, wie vom `Content-Security-Policy` HTTP-Header angegeben.
- `referrer` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Der Referrer des Dokuments, in dem die Verletzung aufgetreten ist.
- `script-sample`

  - : Die ersten 40 Zeichen des Inline-Skripts, des Ereignishandlers oder des Stils, der die Verletzung verursacht hat.
    Verletzungen, die aus externen Dateien stammen, sind nicht im Bericht enthalten.

    Dies gilt nur für [`script-src*`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#script-src) und [`style-src*`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#style-src) Verletzungen, wenn die entsprechende `Content-Security-Policy`-Direktive das Stichwort [`'report-sample'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#report-sample) enthält.

- `status-code`
  - : Der HTTP-Statuscode der Ressource, auf der das globale Objekt instanziiert wurde.
- `violated-directive` {{deprecated_inline}}
  - : Die Direktive, deren Durchsetzung die Verletzung verursacht hat. Die `violated-directive` ist ein historischer Name für das `effective-directive`-Feld und enthält denselben Wert.

## Beispiele

### CSP-Verletzungsbericht mit Content-Security-Policy

Betrachten Sie eine Seite unter `http://example.com/signup.html`.
Sie verwendet die folgende Richtlinie, die alles außer Stylesheets von `cdn.example.com` verbietet.

```http
Content-Security-Policy: default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports
```

Das HTML von `signup.html` sieht so aus:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Sign Up</title>
    <link rel="stylesheet" href="css/style.css" />
  </head>
  <body>
    Hier ist Inhalt.
  </body>
</html>
```

Erkennen Sie den Fehler? Stylesheets dürfen nur von `cdn.example.com` geladen werden, dennoch versucht die Website, eines von ihrem eigenen Ursprungsort (`http://example.com`) zu laden.
Ein Browser, der in der Lage ist, CSP durchzusetzen, würde den folgenden Verletzungsbericht als eine `POST`-Anfrage an `http://example.com/_/csp-reports` senden, wenn das Dokument besucht wird:

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

Wie Sie sehen, enthält der Bericht den vollständigen Pfad zur verletzenden Ressource in `blocked-uri`.
Dies ist nicht immer der Fall.
Zum Beispiel, wenn `signup.html` versuchen würde, CSS von `http://anothercdn.example.com/stylesheet.css` zu laden, würde der Browser _nicht_ den vollständigen Pfad enthalten, sondern nur den Ursprung,
(`http://anothercdn.example.com`), um die Weitergabe sensibler Informationen über Cross-Origin-Ressourcen zu verhindern.
Die CSP-Spezifikation [gibt eine Erklärung](https://www.w3.org/TR/CSP/#security-violation-reports) zu diesem Verhalten.

### CSP-Verletzungsbericht mit Content-Security-Policy-Report-Only

Die `report-uri`-Direktive kann auch mit dem {{httpheader("Content-Security-Policy-Report-Only")}}-Antwortheader verwendet werden.
Dieser Header ermöglicht es dem Browser, zu berichten, aber nicht zu blockieren, wenn Verstöße beim Testen auftreten.

Der HTTP-Header wäre weitgehend derselbe.

```http
Content-Security-Policy-Report-Only: default-src 'none'; style-src cdn.example.com; report-to /_/csp-reports
```

Der Bericht wäre der gleiche, außer für die Disposition `"report"` und natürlich die `"original-policy"`:

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

### CSP-Verletzungsprotokollierung

Angenommen, ein Server sendet Antworten mit dem folgenden `Content-Security-Policy`-Header:

```http
Content-Security-Policy: default-src https:; report-uri /csp-violation-report-endpoint/
```

`/csp-violation-report-endpoint/` könnte zum Beispiel ein PHP-Skript wie das folgende ausführen, das das JSON zur Verletzung protokolliert und, wenn die Verletzung die erste ist, die zur Protokolldatei hinzugefügt wird, eine E-Mail an einen Administrator sendet:

```php
<?php

// Start configure
$log_file = dirname(__FILE__) . '/csp-violations.log';
$log_file_size_limit = 1000000; // bytes - once exceeded no further entries are added
$email_address = 'admin@example.com';
$email_subject = 'Content-Security-Policy violation';
// End configuration

$current_domain = preg_replace('/www\./i', '', $_SERVER['SERVER_NAME']);
$email_subject = $email_subject . ' on ' . $current_domain;

http_response_code(204); // HTTP 204 No Content

$json_data = file_get_contents('php://input');

// We pretty print the JSON before adding it to the log file
if ($json_data = json_decode($json_data)) {
  $json_data = json_encode($json_data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);

  if (!file_exists($log_file)) {
    // Send an email
    $message = "The following Content-Security-Policy violation occurred on " .
      $current_domain . ":\n\n" .
      $json_data .
      "\n\nFurther CPS violations will be logged to the following log file, but no further email notifications will be sent until this log file is deleted:\n\n" .
      $log_file;
    mail($email_address, $email_subject, $message,
         'Content-Type: text/plain;charset=utf-8');
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
