---
title: "CSP: report-uri"
slug: Web/HTTP/Headers/Content-Security-Policy/report-uri
l10n:
  sourceCommit: 6b4c6ac616502ec3378cfa5f42a9724d4e5a3f18
---

{{HTTPSidebar}}{{deprecated_header}}

> [!WARNING]
> Die {{CSP("report-to")}}-Direktive soll `report-uri` ersetzen, und in Browsern, die `report-to` unterstützen, wird die `report-uri` Direktive ignoriert.
>
> Bis `report-to` jedoch breit unterstützt wird, können Sie beide Header wie folgt angeben:
>
> ```http
> Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
> ```

Die veraltete HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`report-uri`**-Direktive weist den Benutzeragenten an, Versuche zu melden, die Content Security Policy zu verletzen.
Diese Verletzungsberichte bestehen aus [JSON-Dokumenten](#syntax_des_verletzungsberichts), die über eine HTTP-`POST`-Anfrage an die angegebene URI gesendet werden.

Die Direktive hat an und für sich keine Wirkung, sondern erhält erst in Kombination mit anderen Direktiven Bedeutung.

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

Das Bericht-JSON-Objekt wird über eine HTTP-`POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report` gesendet.

> [!NOTE] Verletzungsberichte sollten als angreiferkontrollierte Daten betrachtet werden.
> Der Inhalt sollte ordnungsgemäß bereinigt werden, bevor er gespeichert oder gerendert wird.
> Dies gilt insbesondere für die [script-sample](#script-sample)-Eigenschaft, falls vorhanden.

Das Bericht-JSON-Objekt hat eine einzige, übergeordnete Eigenschaft, `"csp-report"`, die ein Objekt mit den folgenden Eigenschaften enthält:

- `blocked-uri`
  - : Die URI der Ressource, die durch die Content Security Policy am Laden gehindert wurde.
    Wenn die blockierte URI von einem anderen Ursprung als der `document-uri` stammt, wird die blockierte URI so gekürzt, dass sie nur noch das Schema, den Host und den Port enthält.
- `disposition`
  - : Entweder `"enforce"` oder `"report"`, je nachdem, ob der {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header oder der `Content-Security-Policy`-Header verwendet wird.
- `document-uri`
  - : Die URI des Dokuments, in dem die Verletzung aufgetreten ist.
- `effective-directive`
  - : Die Direktive, deren Durchsetzung die Verletzung verursacht hat.
    Einige Browser können unterschiedliche Werte bereitstellen, wie z.B. Chrome mit `style-src-elem`/`style-src-attr`, selbst wenn die durchgesetzte Direktive `style-src` war.
- `original-policy`
  - : Die ursprüngliche Richtlinie, wie sie durch den `Content-Security-Policy`-HTTP-Header angegeben wurde.
- `referrer` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Der Referrer des Dokuments, in dem die Verletzung aufgetreten ist.
- `script-sample`

  - : Die ersten 40 Zeichen des Inline-Skripts, des Ereignis-Handlers oder des Stils, der die Verletzung verursacht hat.
    Verstöße, die von externen Dateien ausgehen, werden im Bericht nicht berücksichtigt.

    Dies gilt nur für Verstöße gegen [`script-src*`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#script-src) und [`style-src*`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#style-src), wenn die entsprechende `Content-Security-Policy`-Direktive das Schlüsselwort [`'report-sample'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#report-sample) enthält.

- `status-code`
  - : Der HTTP-Statuscode der Ressource, bei der das globale Objekt instanziiert wurde.
- `violated-directive` {{deprecated_inline}}
  - : Die Direktive, deren Durchsetzung die Verletzung verursachte. Die `violated-directive` ist ein historischer Name für das Feld `effective-directive` und enthält denselben Wert.

## Beispiele

### CSP-Verletzungsbericht mit Content-Security-Policy

Betrachten wir eine Seite unter `http://example.com/signup.html`.
Sie verwendet folgende Richtlinie, die alles außer von `cdn.example.com` geladene Stylesheets nicht zulässt.

```http
Content-Security-Policy: default-src 'none'; style-src cdn.example.com; report-uri /_/csp-reports
```

Das HTML von `signup.html` sieht folgendermaßen aus:

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

Können Sie den Fehler erkennen? Stylesheets dürfen nur von `cdn.example.com` geladen werden, dennoch versucht die Website, eines von ihrem eigenen Ursprung (`http://example.com`) zu laden.
Ein Browser, der in der Lage ist, CSP durchzusetzen, würde den folgenden Verletzungsbericht als `POST`-Anfrage an `http://example.com/_/csp-reports` senden, wenn das Dokument besucht wird:

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

Wie Sie sehen können, enthält der Bericht den vollständigen Pfad zur verletzenden Ressource in `blocked-uri`.
Dies ist nicht immer der Fall.
Wenn `signup.html` beispielsweise versuchen würde, CSS von `http://anothercdn.example.com/stylesheet.css` zu laden, würde der Browser den vollständigen Pfad _nicht_ einbeziehen, sondern nur den Ursprung,
(`http://anothercdn.example.com`), um das Offenbaren sensibler Informationen über ursprungsübergreifende Ressourcen zu verhindern.
Die CSP-Spezifikation [gibt eine Erklärung](https://www.w3.org/TR/CSP/#security-violation-reports) für dieses Verhalten.

### CSP-Verletzungsbericht mit Content-Security-Policy-Report-Only

Die `report-uri`-Direktive kann auch mit dem {{httpheader("Content-Security-Policy-Report-Only")}}-Antwortheader verwendet werden.
Dieser Header ermöglicht es dem Browser, Berichte zu erstellen, aber bei Tests keine Blockierungen vorzunehmen.

Der HTTP-Header wäre weitgehend gleich.

```http
Content-Security-Policy-Report-Only: default-src 'none'; style-src cdn.example.com; report-to /_/csp-reports
```

Der Bericht wäre bis auf die Disposition `"report"` und natürlich die `"original-policy"` identisch:

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

`/csp-violation-report-endpoint/` könnte beispielsweise ein PHP-Skript ausführen, das das JSON, das die Verletzung detailliert beschreibt, protokolliert und, wenn die Verletzung die erste im Protokollfile hinzugefügte ist, eine E-Mail an einen Administrator sendet:

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
