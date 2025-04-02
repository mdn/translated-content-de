---
title: "CSP: report-uri"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{HTTPSidebar}}{{deprecated_header}}

> [!WARNING]
> Die {{CSP("report-to")}}-Direktive soll `report-uri` ersetzen, und in Browsern, die `report-to` unterstützen, wird die `report-uri`-Direktive ignoriert.
>
> Bis `report-to` jedoch weit verbreitet unterstützt wird, können Sie beide Header wie folgt angeben:
>
> ```http
> Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
> ```

Die veraltete HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`report-uri`**-Direktive weist den Benutzeragenten an, Versuche zu melden, die Content Security Policy zu verletzen.
Diese Verletzungsberichte bestehen aus [JSON-Dokumenten](#syntax_des_verletzungsberichts), die über eine HTTP-`POST`-Anfrage an die angegebene URI gesendet werden.

Die Direktive hat keinen Effekt an sich, sondern gewinnt nur in Kombination mit anderen Direktiven an Bedeutung.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Direktivtyp</th>
      <td>{{Glossary("Reporting_directive", "Reporting-Direktive")}}</td>
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

> [!NOTE] Verletzungsberichte sollten als von Angreifern kontrollierte Daten betrachtet werden.
> Die Inhalte sollten vor dem Speichern oder Darstellen ordnungsgemäß bereinigt werden.
> Dies gilt insbesondere für die [script-sample](#script-sample)-Eigenschaft, wenn diese angegeben ist.

Das JSON-Objekt des Berichts hat eine einzige obere Eigenschaft, `"csp-report"`, die ein Objekt mit den folgenden Eigenschaften enthält:

- `blocked-uri`
  - : Die URI der Ressource, deren Laden durch die Content Security Policy blockiert wurde.
    Wenn die blockierte URI von einem anderen Ursprung als der `document-uri` stammt, wird die blockierte URI so gekürzt, dass nur das Schema, der Host und der Port enthalten sind.
- `disposition`
  - : Entweder `"enforce"` oder `"report"`, je nachdem, ob der {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header oder der `Content-Security-Policy`-Header verwendet wird.
- `document-uri`
  - : Die URI des Dokuments, in dem die Verletzung aufgetreten ist.
- `effective-directive`
  - : Die Direktive, deren Durchsetzung die Verletzung verursacht hat.
    Einige Browser können unterschiedliche Werte bereitstellen, wie etwa Chrome, das `style-src-elem`/`style-src-attr` angibt, auch wenn die durchgesetzte Direktive `style-src` war.
- `original-policy`
  - : Die ursprüngliche Richtlinie, wie sie vom `Content-Security-Policy`-HTTP-Header angegeben wurde.
- `referrer` {{deprecated_inline}} {{non-standard_inline}}
  - : Der Referrer des Dokuments, in dem die Verletzung aufgetreten ist.
- `script-sample`

  - : Die ersten 40 Zeichen des Inline-Skripts, des Ereignis-Handlers oder des Stils, der die Verletzung verursacht hat.
    Verstöße, die von externen Dateien ausgehen, werden im Bericht nicht berücksichtigt.

    Dies gilt nur für Verstöße gegen [`script-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) und [`style-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src), wenn die entsprechende `Content-Security-Policy`-Direktive das [`'report-sample'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample)-Schlüsselwort enthält.

- `status-code`
  - : Der HTTP-Statuscode der Ressource, auf der das globale Objekt instanziiert wurde.
- `violated-directive` {{deprecated_inline}}
  - : Die Direktive, deren Durchsetzung die Verletzung verursacht hat. `violated-directive` ist ein historischer Name für das `effective-directive`-Feld und enthält den gleichen Wert.

## Beispiele

### CSP-Verletzungsbericht mit Content-Security-Policy

Betrachten wir eine Seite unter `http://example.com/signup.html`.
Diese verwendet die folgende Richtlinie, die alles außer Stylesheets, die von `cdn.example.com` geladen werden, verbietet.

```http
Content-Security-Policy: default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports
```

Der HTML-Code von `signup.html` sieht folgendermaßen aus:

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

Können Sie den Fehler erkennen? Stylesheets dürfen nur von `cdn.example.com` geladen werden, doch die Website versucht, eines von ihrem eigenen Ursprung (`http://example.com`) zu laden.
Ein Browser, der CSP durchsetzen kann, würde den folgenden Verletzungsbericht als `POST`-Anfrage an `http://example.com/_/csp-reports` senden, wenn das Dokument aufgerufen wird:

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

Wie Sie sehen können, enthält der Bericht den vollständigen Pfad zu der Ressource, die die Verletzung verursacht hat, in `blocked-uri`.
Dies ist nicht immer der Fall.
Wenn `signup.html` beispielsweise versucht hätte, CSS von `http://anothercdn.example.com/stylesheet.css` zu laden, würde der Browser _nicht_ den vollständigen Pfad angeben, sondern nur den Ursprung,
(`http://anothercdn.example.com`), um das Lecken sensibler Informationen über Cross-Origin-Ressourcen zu verhindern.
Die CSP-Spezifikation [gibt eine Erklärung](https://www.w3.org/TR/CSP/#security-violation-reports) für dieses Verhalten.

### CSP-Verletzungsbericht mit Content-Security-Policy-Report-Only

Die `report-uri`-Direktive kann auch mit dem {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Antwortheader verwendet werden.
Dieser Header ermöglicht es dem Browser, Verstöße zu melden, aber nicht zu blockieren, wenn getestet wird.

Der HTTP-Header sähe fast gleich aus.

```http
Content-Security-Policy-Report-Only: default-src 'none'; style-src cdn.example.com; report-to /_/csp-reports
```

Der Bericht wäre derselbe, mit Ausnahme der Disposition `"report"` und natürlich der `"original-policy"`:

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

`/csp-violation-report-endpoint/` könnte zum Beispiel ein PHP-Skript ausführen, das das JSON mit den Details der Verletzung protokolliert und, falls die Verletzung die erste ist, die zur Protokolldatei hinzugefügt wird, eine E-Mail an einen Administrator sendet:

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
