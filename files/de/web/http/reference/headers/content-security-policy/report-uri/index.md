---
title: "Content-Security-Policy: report-uri directive"
short-title: report-uri
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

> [!WARNING]
> Die {{CSP("report-to")}}-Direktive soll `report-uri` ersetzen, und in Browsern, die `report-to` unterstützen, wird die `report-uri`-Direktive ignoriert.
>
> Bis jedoch `report-to` umfassend unterstützt wird, können Sie beide Header wie folgt angeben:
>
> ```http
> Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
> ```

Die veraltete HTTP-{{HTTPHeader("Content-Security-Policy")}} (CSP) **`report-uri`**-Direktive weist den User-Agent an, Verstöße gegen die Content-Security-Policy zu melden.
Diese Verstoßberichte bestehen aus [JSON-Dokumenten](#syntax_des_verstoßberichts), die über eine HTTP-`POST`-Anfrage an die angegebene URI gesendet werden.

Die Direktive hat für sich genommen keinen Effekt, gewinnt aber in Kombination mit anderen Direktiven an Bedeutung.

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
        Diese Direktive wird nicht im {{HTMLElement("meta")}}-Element unterstützt.
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

### Syntax des Verstoßberichts

Das JSON-Objekt des Berichts wird über eine HTTP-`POST`-Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report` gesendet.

> [!NOTE]
> Vorfallberichte sollten als vom Angreifer kontrollierte Daten betrachtet werden.
> Der Inhalt sollte vor der Speicherung oder Darstellung ordnungsgemäß bereinigt werden.
> Dies gilt besonders für die [script-sample](#script-sample)-Eigenschaft, falls angegeben.

Das JSON-Objekt des Berichts hat eine einzige oberste Eigenschaft, `"csp-report"`, die ein Objekt mit den folgenden Eigenschaften enthält:

- `blocked-uri`
  - : Die URI der Ressource, die durch die Content-Security-Policy am Laden gehindert wurde.
    Wenn die blockierte URI von einem anderen Ursprung als der `document-uri` stammt, wird die blockierte URI so gekürzt, dass nur Schema, Host und Port enthalten sind.
- `disposition`
  - : Entweder `"enforce"` oder `"report"`, abhängig davon, ob der {{HTTPHeader("Content-Security-Policy-Report-Only")}}-Header oder der `Content-Security-Policy`-Header verwendet wird.
- `document-uri`
  - : Die URI des Dokuments, in dem der Verstoß aufgetreten ist.
- `effective-directive`
  - : Die Direktive, deren Durchsetzung den Verstoß verursacht hat.
    Einige Browser können unterschiedliche Werte liefern, zum Beispiel liefert Chrome `style-src-elem`/`style-src-attr`, selbst wenn die durchgesetzte Direktive `style-src` war.
- `original-policy`
  - : Die ursprüngliche Richtlinie, wie durch den `Content-Security-Policy`-HTTP-Header angegeben.
- `referrer` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Der Referrer des Dokuments, in dem der Verstoß aufgetreten ist.
- `script-sample`
  - : Die ersten 40 Zeichen des eingebetteten Skripts, des Ereignishandlers oder des Stils, die den Verstoß verursacht haben.
    Verstöße, die von externen Dateien ausgehen, werden im Bericht nicht eingeschlossen.

    Dies gilt nur für [`script-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src)- und [`style-src*`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/style-src)-Verstöße, wenn die entsprechende `Content-Security-Policy`-Direktive das [`'report-sample'`](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#report-sample)-Schlüsselwort enthält.

- `status-code`
  - : Der HTTP-Statuscode der Ressource, auf der das globale Objekt instanziiert wurde.
- `violated-directive` {{deprecated_inline}}
  - : Die Direktive, deren Durchsetzung den Verstoß verursacht hat. Das `violated-directive` ist ein historischer Name für das `effective-directive`-Feld und enthält denselben Wert.

## Beispiele

### CSP-Verstoßbericht mit Content-Security-Policy

Betrachten wir eine Seite unter `http://example.com/signup.html`.
Sie verwendet die folgende Richtlinie, die alles außer Stylesheets blockiert, die von `cdn.example.com` geladen werden.

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

Können Sie den Fehler erkennen? Stylesheets dürfen nur von `cdn.example.com` geladen werden, dennoch versucht die Webseite, eines von ihrem eigenen Ursprung (`http://example.com`) zu laden.
Ein Browser, der CSP durchsetzen kann, würde den folgenden Verstoßbericht als `POST`-Anfrage an `http://example.com/_/csp-reports` senden, wenn das Dokument aufgerufen wird:

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
Das ist nicht immer der Fall.
Beispielsweise würde der Browser, wenn `signup.html` versucht, CSS von `http://anothercdn.example.com/stylesheet.css` zu laden, _nicht_ den vollständigen Pfad einschließen, sondern nur den Ursprung,
(`http://anothercdn.example.com`), um das Durchsickern sensibler Informationen über Cross-Origin-Ressourcen zu verhindern.
Die CSP-Spezifikation [gibt dazu eine Erklärung](https://w3c.github.io/webappsec-csp/#security-violation-reports).

### CSP-Verstoßbericht mit Content-Security-Policy-Report-Only

Die `report-uri`-Direktive kann auch mit dem {{httpheader("Content-Security-Policy-Report-Only")}}-Antwortheader verwendet werden.
Dieser Header ermöglicht es dem Browser, Verstöße zu melden, ohne sie beim Testen zu blockieren.

Der HTTP-Header sähe sehr ähnlich aus.

```http
Content-Security-Policy-Report-Only: default-src 'none'; style-src cdn.example.com; report-to /_/csp-reports
```

Der Bericht wäre derselbe, außer für die Disposition `"report"` und natürlich die `"original-policy"`:

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

### CSP-Verstoßprotokollierung

Angenommen, ein Server sendet Antworten mit dem folgenden `Content-Security-Policy`-Header:

```http
Content-Security-Policy: default-src https:; report-uri /csp-violation-report-endpoint/
```

`/csp-violation-report-endpoint/` könnte zum Beispiel ein PHP-Skript ausführen, das wie folgt das JSON, das den Verstoß beschreibt, protokolliert und, wenn der Verstoß der erste ist, der zum Protokoll hinzugefügt wird, eine E-Mail an einen Administrator sendet:

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
