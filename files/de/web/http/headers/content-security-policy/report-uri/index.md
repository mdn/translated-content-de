---
title: "CSP: report-uri"
slug: Web/HTTP/Headers/Content-Security-Policy/report-uri
l10n:
  sourceCommit: 6b4c6ac616502ec3378cfa5f42a9724d4e5a3f18
---

{{HTTPSidebar}}{{deprecated_header}}

> [!WARNING]
> Die {{CSP("report-to")}} Direktive soll `report-uri` ersetzen, und in Browsern, die `report-to` unterstützen, wird die `report-uri` Direktive ignoriert.
>
> Bis `report-to` jedoch weitgehend unterstützt wird, können Sie beide Header wie folgt angeben:
>
> ```http
> Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to endpoint_name
> ```

Die veraltete HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`report-uri`** Direktive weist den Benutzeragenten an, Versuche zur Verletzung der Content-Security-Policy zu melden.
Diese Verletzungsberichte bestehen aus [JSON-Dokumenten](#verletzungsbericht-syntax), die über eine HTTP `POST` Anfrage an die angegebene URI gesendet werden.

Die Direktive hat für sich genommen keine Wirkung, sondern gewinnt nur in Kombination mit anderen Direktiven Bedeutung.

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
        Diese Direktive wird nicht im {{HTMLElement("meta")}} Element unterstützt.
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

Das JSON-Objekt des Berichts wird über eine HTTP `POST` Operation mit einem {{HTTPHeader("Content-Type")}} von `application/csp-report` gesendet.

> [!NOTE] Verletzungsberichte sollten als angreiferkontrollierte Daten betrachtet werden.
> Der Inhalt sollte ordnungsgemäß bereinigt werden, bevor er gespeichert oder angezeigt wird.
> Dies gilt insbesondere für die [script-sample](#script-sample) Eigenschaft, falls angegeben.

Das JSON-Objekt des Berichts hat eine einzige Eigenschaft auf oberster Ebene, `"csp-report"`, die ein Objekt mit den folgenden Eigenschaften enthält:

- `blocked-uri`
  - : Die URI der Ressource, die vom Laden durch die Content-Security-Policy blockiert wurde.
    Wenn die blockierte URI aus einem anderen Ursprung als die `document-uri` stammt, wird die blockierte URI abgeschnitten und enthält nur das Schema, den Host und den Port.
- `disposition`
  - : Entweder `"enforce"` oder `"report"`, je nachdem, ob der {{HTTPHeader("Content-Security-Policy-Report-Only")}} Header oder der `Content-Security-Policy` Header verwendet wird.
- `document-uri`
  - : Die URI des Dokuments, in dem die Verletzung auftrat.
- `effective-directive`
  - : Die Direktive, deren Durchsetzung die Verletzung verursacht hat.
    Einige Browser können unterschiedliche Werte liefern, wie zum Beispiel Chrome, das `style-src-elem`/`style-src-attr` zur Verfügung stellt, selbst wenn die durchgesetzte Direktive `style-src` war.
- `original-policy`
  - : Die Originalrichtlinie, wie sie durch den `Content-Security-Policy` HTTP Header angegeben wurde.
- `referrer` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Der Referrer des Dokuments, in dem die Verletzung aufgetreten ist.
- `script-sample`

  - : Die ersten 40 Zeichen des Inline-Skripts, Eventhandlers oder Stils, das die Verletzung verursacht hat.
    Verstöße, die aus externen Dateien stammen, sind im Bericht nicht enthalten.

    Dies ist nur anwendbar auf [`script-src*`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#script-src) und [`style-src*`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#style-src) Verstöße, wenn die entsprechende `Content-Security-Policy` Direktive das [`'report-sample'`](/de/docs/Web/HTTP/Headers/Content-Security-Policy#report-sample) Schlüsselwort enthält.

- `status-code`
  - : Der HTTP-Statuscode der Ressource, auf der das globale Objekt instanziiert wurde.
- `violated-directive` {{deprecated_inline}}
  - : Die Direktive, deren Durchsetzung die Verletzung verursacht hat. Die `violated-directive` ist ein historischer Name für das Feld `effective-directive` und enthält denselben Wert.

## Beispiele

### CSP-Verletzungsbericht mit Content-Security-Policy

Betrachten Sie eine Seite unter `http://example.com/signup.html`.
Sie verwendet die folgende Richtlinie, die alles außer Stylesheets, die von `cdn.example.com` geladen werden, verbietet.

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
    Hier ist Inhalt.
  </body>
</html>
```

Können Sie den Fehler erkennen? Stylesheets dürfen nur von `cdn.example.com` geladen werden, dennoch versucht die Website, eines von ihrem eigenen Ursprung (`http://example.com`) zu laden.
Ein CSP-fähiger Browser würde bei Besuch des Dokuments den folgenden Verletzungsbericht als `POST` Anfrage an `http://example.com/_/csp-reports` senden:

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

Wie Sie sehen können, beinhaltet der Bericht den vollständigen Pfad zur verletzenden Ressource in `blocked-uri`.
Das ist nicht immer der Fall.
Wenn zum Beispiel `signup.html` versucht hätte, CSS von `http://anothercdn.example.com/stylesheet.css` zu laden, würde der Browser _nicht_ den vollständigen Pfad angeben, sondern nur den Ursprung
(`http://anothercdn.example.com`), um das Auslaufen sensibler Informationen über fremde Ressourcen zu verhindern.
Die CSP-Spezifikation [gibt eine Erklärung](https://www.w3.org/TR/CSP/#security-violation-reports) für dieses Verhalten.

### CSP-Verletzungsbericht mit Content-Security-Policy-Report-Only

Die `report-uri` Direktive kann auch mit dem {{httpheader("Content-Security-Policy-Report-Only")}} Antwort-Header verwendet werden.
Dieser Header ermöglicht es dem Browser, über Verstöße zu berichten, sie jedoch beim Testen nicht zu blockieren.

Der HTTP-Header würde ähnlich aussehen.

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

Angenommen, ein Server sendet Antworten mit folgendem `Content-Security-Policy` Header:

```http
Content-Security-Policy: default-src https:; report-uri /csp-violation-report-endpoint/
```

`/csp-violation-report-endpoint/` könnte beispielsweise ein PHP-Skript wie das folgende ausführen, das das JSON protokolliert, das die Verletzung detailliert beschreibt, und, falls die Verletzung die erste ist, die zur Protokolldatei hinzugefügt wird, eine E-Mail an einen Administrator sendet:

```php
<?php

// Start konfigurieren
$log_file = dirname(__FILE__) . '/csp-violations.log';
$log_file_size_limit = 1000000; // Bytes - keine weiteren Einträge, wenn das Limit überschritten wird
$email_address = 'admin@example.com';
$email_subject = 'Content-Security-Policy Verletzung';
// Ende der Konfiguration

$current_domain = preg_replace('/www\./i', '', $_SERVER['SERVER_NAME']);
$email_subject = $email_subject . ' auf ' . $current_domain;

http_response_code(204); // HTTP 204 Kein Inhalt

$json_data = file_get_contents('php://input');

// Wir formatieren das JSON, bevor wir es zur Protokolldatei hinzufügen
if ($json_data = json_decode($json_data)) {
  $json_data = json_encode($json_data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES);

  if (!file_exists($log_file)) {
    // Senden einer E-Mail
    $message = "Die folgende Content-Security-Policy Verletzung ist auf " .
      $current_domain . " aufgetreten:\n\n" .
      $json_data .
      "\n\nWeitere CSP-Verletzungen werden in die folgende Protokolldatei eingetragen, jedoch werden keine weiteren E-Mail-Benachrichtigungen gesendet, bis diese Protokolldatei gelöscht wird:\n\n" .
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
