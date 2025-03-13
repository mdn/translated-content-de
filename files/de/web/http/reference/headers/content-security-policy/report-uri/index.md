---
title: "CSP: report-uri"
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}{{deprecated_header}}

> [!WARNING]
> Die Richtlinie {{CSP("report-to")}} soll `report-uri` ersetzen, und in Browsern, die `report-to` unterstützen, wird die `report-uri`-Richtlinie ignoriert.
>
> Bis `report-to` jedoch weit verbreitet unterstützt wird, können Sie beide Header spezifizieren, wie gezeigt:
>
> ```http
> Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
> ```

Die veraltete HTTP-Richtlinie {{HTTPHeader("Content-Security-Policy")}} (CSP) **`report-uri`** weist den User-Agent an, Versuche, die Content Security Policy zu verletzen, zu melden.
Diese Verletzungsberichte bestehen aus [JSON-Dokumenten](#syntax_des_verletzungsberichts), die über eine HTTP-`POST`-Anfrage an die angegebene URI gesendet werden.

Die Richtlinie hat in sich selbst keine Wirkung, sondern gewinnt erst in Kombination mit anderen Richtlinien an Bedeutung.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP-Version</th>
      <td>1</td>
    </tr>
    <tr>
      <th scope="row">Richtlinientyp</th>
      <td>{{Glossary("Reporting_directive", "Berichtsrichtlinie")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Diese Richtlinie wird nicht im {{HTMLElement("meta")}}-Element unterstützt.
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
  - : Eine URI, an die der Bericht gesendet werden muss.

### Syntax des Verletzungsberichts

Das JSON-Objekt des Berichts wird über eine HTTP-`POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report` gesendet.

> [!NOTE] Verletzungsberichte sollten als angreiferkontrollierte Daten betrachtet werden.
> Der Inhalt sollte ordnungsgemäß bereinigt werden, bevor er gespeichert oder gerendert wird.
> Dies gilt insbesondere für die [script-sample](#script-sample)-Eigenschaft, falls vorhanden.

Das JSON-Objekt des Berichts hat eine einzelne oberste Eigenschaft, `"csp-report"`, die ein Objekt mit den folgenden Eigenschaften enthält:

- `blocked-uri`
  - : Die URI der Ressource, deren Laden durch die Content Security Policy blockiert wurde.
    Wenn die blockierte URI aus einem anderen Ursprung als die `document-uri` stammt, wird die blockierte URI gekürzt, sodass nur das Schema, der Host und der Port enthalten sind.
- `disposition`
  - : Entweder `"enforce"` oder `"report"`, abhängig davon, ob der {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header oder der `Content-Security-Policy`-Header verwendet wird.
- `document-uri`
  - : Die URI des Dokuments, in dem die Verletzung auftrat.
- `effective-directive`
  - : Die Richtlinie, deren Durchsetzung die Verletzung verursacht hat.
    Einige Browser können unterschiedliche Werte bereitstellen, wie z.B. Chrome, das `style-src-elem`/`style-src-attr` bereitstellt, selbst wenn die durchgesetzte Richtlinie `style-src` war.
- `original-policy`
  - : Die ursprüngliche Richtlinie, wie sie durch den `Content-Security-Policy`-HTTP-Header spezifiziert wurde.
- `referrer` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Der Referrer des Dokuments, in dem die Verletzung auftrat.
- `script-sample`

  - : Die ersten 40 Zeichen des Inline-Skripts, des Ereignishandlers oder des Stils, der die Verletzung verursacht hat.
    Verletzungen, die von externen Dateien stammen, sind nicht im Bericht enthalten.

    Dies gilt nur für [`script-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#script-src) und [`style-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#style-src) Verletzungen, wenn die entsprechende `Content-Security-Policy`-Richtlinie das [`'report-sample'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample) Schlüsselwort enthält.

- `status-code`
  - : Der HTTP-Statuscode der Ressource, auf der das globale Objekt instanziiert wurde.
- `violated-directive` {{deprecated_inline}}
  - : Die Richtlinie, deren Durchsetzung die Verletzung verursacht hat. Die `violated-directive` ist ein historischer Name für das Feld `effective-directive` und enthält denselben Wert.

## Beispiele

### CSP-Verletzungsbericht mit Content-Security-Policy

Betrachten wir eine Seite unter `http://example.com/signup.html`.
Es verwendet die folgende Richtlinie, die alles außer Stylesheets von `cdn.example.com` verbietet.

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
    Here be content.
  </body>
</html>
```

Können Sie den Fehler erkennen? Stylesheets dürfen nur von `cdn.example.com` geladen werden, aber die Website versucht, eines von ihrem eigenen Ursprung (`http://example.com`) zu laden.
Ein Browser, der CSP durchsetzen kann, würde den folgenden Verletzungsbericht als `POST`-Anfrage an `http://example.com/_/csp-reports` senden, wenn das Dokument besucht wird:

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
Wenn `signup.html` beispielsweise versucht hätte, CSS von `http://anothercdn.example.com/stylesheet.css` zu laden, würde der Browser _nicht_ den vollständigen Pfad, sondern nur den Ursprung,
(`http://anothercdn.example.com`) einfügen, um das Auslaufen sensibler Informationen über ressourcenüberschreitende Ursprünge zu verhindern.
Die CSP-Spezifikation [liefert eine Erklärung](https://www.w3.org/TR/CSP/#security-violation-reports) für dieses Verhalten.

### CSP-Verletzungsbericht mit Content-Security-Policy-Report-Only

Die `report-uri`-Richtlinie kann auch mit dem {{httpheader("Content-Security-Policy-Report-Only")}}-Response-Header verwendet werden.
Dieser Header erlaubt es dem Browser, Verletzungen zu melden, aber nicht zu blockieren, wenn sie getestet werden.

Der HTTP-Header wäre ziemlich ähnlich.

```http
Content-Security-Policy-Report-Only: default-src 'none'; style-src cdn.example.com; report-to /_/csp-reports
```

Der Bericht wäre derselbe, abgesehen von der Disposition `"report"` und natürlich der `"original-policy"`:

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

`/csp-violation-report-endpoint/` könnte zum Beispiel ein PHP-Skript ausführen, das das JSON detailliert protokolliert, das die Verletzung beschreibt, und, wenn die Verletzung die erste ist, die in die Protokolldatei eingefügt wird, eine E-Mail an einen Administrator sendet:

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

{{Spezifikationen}}

## Browser-Kompatibilität

{{Kompatibilität}}

## Siehe auch

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Content-Security-Policy-Report-Only")}}
- {{CSP("report-to")}}
