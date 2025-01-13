---
title: declarativeNetRequest
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest
l10n:
  sourceCommit: 9156c03a71d64ed2fdba4e94d651e4c745660f24
---

{{AddonSidebar}}

Diese API ermöglicht es Erweiterungen, Bedingungen und Aktionen festzulegen, die beschreiben, wie Netzwerk-Anfragen behandelt werden sollen. Diese deklarativen Regeln ermöglichen es dem Browser, Netzwerk-Anfragen zu evaluieren und zu modifizieren, ohne die Erweiterungen über einzelne Netzwerk-Anfragen zu benachrichtigen.

## Berechtigungen

Um diese API zu nutzen, muss eine Erweiterung die Berechtigung `"declarativeNetRequest"` oder `"declarativeNetRequestWithHostAccess"` in ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei anfordern.

Die `"declarativeNetRequest"`-Berechtigung erlaubt es Erweiterungen, Anfragen zu blockieren und zu upgraden, ohne jegliche [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions). Host-Berechtigungen sind erforderlich, wenn die Erweiterung Anfragen umleiten oder Header auf Anfragen ändern möchte oder wenn die Berechtigung `"declarativeNetRequestWithHostAccess"` anstelle der `"declarativeNetRequest"`-Berechtigung verwendet wird. Um in diesen Fällen auf Anfragen zu reagieren, sind Host-Berechtigungen für die Anfrage-URL erforderlich. Für alle Anfragen, außer für Navigationsanfragen (d.h. Ressourcentyp `main_frame` und `sub_frame`), sind Host-Berechtigungen auch für den Initiator der Anfrage erforderlich. Der Initiator einer Anfrage ist in der Regel das Dokument oder der Worker, der die Anfrage ausgelöst hat.

Einige Anfragen sind eingeschränkt und können von Erweiterungen nicht abgeglichen werden. Dazu gehören privilegierte Browser-Anfragen, Anfragen zu oder von [eingeschränkten Domains](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#restricted_domains) und Anfragen von anderen Erweiterungen.

Die Berechtigung `"declarativeNetRequestFeedback"` ist erforderlich, um {{WebExtAPIRef("declarativeNetRequest.getMatchedRules","getMatchedRules")}} und {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug","onRuleMatchedDebug")}} zu benutzen, da sie Informationen über abgeglichene deklarative Regeln zurückgeben. Weitere Informationen finden Sie unter [Testen](#testen).

## Regeln

Die deklarativen Regeln sind durch vier Felder definiert:

- `id` – Eine ID, die eine Regel innerhalb eines Regelsets eindeutig identifiziert. Erforderlich und sollte >= 1 sein.
- `priority` – Die Regelpriorität. Wenn spezifiziert, sollte sie >= 1 sein. Standardwert ist 1. Details, wie die Priorität beeinflusst, welche Regeln angewendet werden, finden Sie unter [Matching-Priorität](#matching-priorität).
- `condition` – Die {{WebExtAPIRef("declarativeNetRequest.RuleCondition","condition")}}, unter der diese Regel ausgelöst wird.
- `action` – Die {{WebExtAPIRef("declarativeNetRequest.RuleAction","action")}}, die ergriffen werden soll, wenn die Regel übereinstimmt. Regeln können eines dieser Dinge tun:
  - eine Netzwerk-Anfrage blockieren.
  - eine Netzwerk-Anfrage umleiten.
  - Header von einer Netzwerk-Anfrage ändern.
  - verhindern, dass eine andere übereinstimmende Regel angewendet wird.

> [!NOTE]
> Eine Umleitungsaktion leitet die Anfrage nicht um und die Anfrage wird wie gewöhnlich fortgesetzt, wenn:
>
> - die Aktion die Anfrage nicht ändert.
> - die Umleitungs-URL ungültig ist (z.B. der Wert von {{WebExtAPIRef("declarativeNetRequest.redirect","redirect.regexSubstitution")}} keine gültige URL ist).

Dies ist ein Beispiel für eine Regel, die alle Skript-Anfragen blockiert, die von `"foo.com"` zu jeder URL mit `"abc"` als Substring stammen:

```json
{
  "id": 1,
  "priority": 1,
  "action": { "type": "block" },
  "condition": {
    "urlFilter": "abc",
    "initiatorDomains": ["foo.com"],
    "resourceTypes": ["script"]
  }
}
```

Das `urlFilter`-Feld einer Regelbedingung wird verwendet, um das Muster zu spezifizieren, das gegen die Anfrage-URL abgeglichen wird. Siehe {{WebExtAPIRef("declarativeNetRequest.RuleCondition","RuleCondition")}} für Details. Einige Beispiele für URL-Filter sind:

<table>
<tbody>
<tr>
<th><code>urlFilter</code></th>
<th>Übereinstimmungen</th>
<th>Keine Übereinstimmungen</th>
</tr>
<tr>
<td><code>"abc"</code></td>
<td>https://abcd.com<br />https://example.com/abcd</td>
<td>https://ab.com</td>
</tr>
<tr>
<td><code>"abc*d"</code></td>
<td>https://abcd.com<br />https://example.com/abcxyzd</td>
<td>https://abc.com</td>
</tr>
<tr>
<td><code>"||a.example.com"</code></td>
<td>https://a.example.com/<br />https://b.a.example.com/xyz</td>
<td>https://example.com/</td>
</tr>
<tr>
<td><code>"|https*"</code></td>
<td>https://example.com</td>
<td>http://example.com/<br />http://https.com</td>
</tr>
</tbody>
</table>

## Regelsets

Regeln sind in Regelsets organisiert:

- **statische Regelsets**: Sammlungen von Regeln, die mit dem Manifestschlüssel[`"declarative_net_request"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) definiert und in der Erweiterung gespeichert sind. Eine Erweiterung kann statische Regelsets mit {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets","updateEnabledRulesets")}} aktivieren und deaktivieren. Das Set der aktivierten statischen Regelsets wird über Sitzungen gespeichert, aber nicht über Erweiterungsupdates hinweg. Die statischen Regelsets, die bei der Installation und dem Update der Erweiterung aktiviert sind, werden durch den Inhalt des Manifestsclüssels `"declarative_net_request"` bestimmt.
- **dynamische Regelsets**: Regeln, die mit {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules","updateDynamicRules")}} hinzugefügt oder entfernt werden. Diese Regeln bleiben über Sitzungen und Erweiterungsupdates hinweg bestehen.
- **Session-Regelsets**: Regeln, die mit {{WebExtAPIRef("declarativeNetRequest.updateSessionRules","updateSessionRules")}} hinzugefügt oder entfernt werden. Diese Regeln werden nicht über Browsersitzungen hinweg beibehalten.

> [!NOTE]
> Fehler und Warnungen über ungültige statische Regeln werden nur während des [Testens](#testen) angezeigt. Ungültige statische Regeln in dauerhaft installierten Erweiterungen werden ignoriert. Daher ist es wichtig, sicherzustellen, dass Ihre statischen Regelsets durch Testen gültig sind.

## Limitierungen

### Begrenzungen für statische Regelsets

Eine Erweiterung kann:

- statische Regelsets im Manifestschlüssel [`"declarative_net_request"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) bis zum Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS","MAX_NUMBER_OF_STATIC_RULESETS")}} spezifizieren.
- statische Regelsets (im Manifestschlüssel `"declarative_net_request"` oder programmatisch) aktivieren, sodass die Anzahl der Regeln (aktiviert oder deaktiviert), die sie enthalten, den Wert von {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES","GUARANTEED_MINIMUM_STATIC_RULES")}} nicht überschreitet und die Anzahl der aktivierten statischen Regelsets den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS","MAX_NUMBER_OF_ENABLED_STATIC_RULESETS")}} nicht überschreitet.
  > [!NOTE]
  > Die Anzahl der Regeln in aktivierten statischen Regelsets für alle Erweiterungen darf das globale Limit nicht überschreiten. Erweiterungen sollten sich nicht darauf verlassen, dass das globale Limit einen bestimmten Wert hat; stattdessen sollten sie {{WebExtAPIRef("declarativeNetRequest.getAvailableStaticRuleCount","getAvailableStaticRuleCount")}} verwenden, um die Anzahl zusätzlicher Regeln zu finden, die sie aktivieren können.
- Regeln in statischen Regelsets bis zum Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES","MAX_NUMBER_OF_DISABLED_STATIC_RULES")}} deaktivieren. Diese deaktivierten Regeln zählen jedoch zu den {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES","GUARANTEED_MINIMUM_STATIC_RULES")}}.

### Dynamische und sitzungsumfassende Regeln

Die Anzahl der dynamischen und sitzungsumfassenden Regeln, die eine Erweiterung hinzufügen kann, ist begrenzt auf:

- In Safari und bis Chrome 119 und Firefox 127, den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}.
- Ab Chrome 120 und Firefox 128, den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}}

## Matching-Priorität

Wenn der Browser evaluiert, wie Anfragen gehandhabt werden sollen, überprüft er die Regeln jeder Erweiterung, die eine Bedingung haben, die mit der Anfrage übereinstimmt, und wählt diejenige aus, die wie folgt angewendet werden soll:

1. die Regelpriorität, wobei 1 die niedrigste Priorität ist (und Regeln standardmäßig den Wert 1 haben, wenn die Priorität nicht festgelegt ist).<br>
   Wenn dies nicht zu einer Regelanwendung führt:
2. die Regelaktion, in der folgenden Reihenfolge der Priorität:
   1. "allow", was bedeutet, dass alle anderen verbleibenden Regeln ignoriert werden.
   2. "allowAllRequests" (nur für die Ressourcentypen main_frame und sub_frame) hat denselben Effekt wie "allow" gilt jedoch auch für zukünftige Subressourcen-Ladevorgänge im Dokument (einschließlich nachrangiger Frames), die von der Anfrage generiert werden.
   3. "block" hebt die Anfrage auf.
   4. "upgradeScheme" aktualisiert das Schema der Anfrage.
   5. "redirect" leitet die Anfrage um.
   6. "modifyHeaders" ändert die Anforderungsoptionen oder Antwortheader oder beides.

> [!NOTE]
> Wenn mehrere zutreffende Regeln dieselbe Regelpriorität und denselben Regelaktionstyp haben, kann das Ergebnis mehrdeutig sein, wenn die zutreffende Aktion zusätzliche Eigenschaften unterstützt. Diese Eigenschaften können zu Ergebnissen führen, die nicht kombiniert werden können. Zum Beispiel:
>
> - Die "block"-Aktion unterstützt keine zusätzlichen Eigenschaften und daher gibt es keine Mehrdeutigkeit: alle zutreffenden "block"-Aktionen führen zum gleichen Ergebnis.
> - Die "redirect"-Aktion leitet eine Anfrage zu einem Ziel um. Wenn mehrere "redirect"-Aktionen übereinstimmen, werden alle außer einer "redirect"-Aktion ignoriert. Es ist immer noch möglich, mehrmals umzuleiten, wenn die umgeleitete Anfrage mit einer anderen Regelbedingung übereinstimmt.
> - Mehrere "modifyHeaders"-Aktionen können unabhängig angewendet werden, wenn sie verschiedene Header betreffen. Das Ergebnis ist mehrdeutig, wenn sie denselben Header betreffen, weil einige Kombinationen von Vorgängen nicht erlaubt sind (wie unter {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}} erklärt). Die Evaluierungsreihenfolge von "modifyHeaders"-Aktionen ist daher wichtig.
>
> Um die Reihenfolge der Anwendungen der Aktionen zu steuern, weisen Sie Regeln, deren Reihenfolge der Priorität wichtig ist, unterschiedliche `priority`-Werte zu.

> [!NOTE]
> Nach der Regelpriorität und der Regelaktion berücksichtigt Firefox das Regelset, zu dem die Regel gehört, in dieser Reihenfolge der Priorität: Sitzung > Dynamik > Sitzungsregelsets.
> Dies kann nicht browserübergreifend zuverlässig angewendet werden, siehe [WECG issue 280](https://github.com/w3c/webextensions/issues/280).

Wenn nur eine Erweiterung eine Regel für die Anfrage liefert, wird diese Regel angewendet. Wenn jedoch mehr als eine Erweiterung eine übereinstimmende Regel hat, wählt der Browser diese in folgender Prioritätsreihenfolge aus:

1. "block"
2. "Umleitung" und "upgradeScheme"
3. "allow" und "allowAllRequests"

Wenn die Anfrage nicht blockiert oder umgeleitet wurde, werden die übereinstimmenden `modifyHeaders`-Aktionen angewendet, wie in {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}} dokumentiert.

## Testen

{{WebExtAPIRef("declarativeNetRequest.testMatchOutcome","testMatchOutcome")}}, {{WebExtAPIRef("declarativeNetRequest.getMatchedRules","getMatchedRules")}}, und {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug","onRuleMatchedDebug")}} sind verfügbar, um das Testen von Regeln und Regelsets zu unterstützen. Diese APIs erfordern die Berechtigungen `"declarativeNetRequestFeedback"`. Zudem:

- in Chrome sind diese APIs nur für entpackte Erweiterungen verfügbar.
- in Firefox sind diese APIs nur verfügbar, nachdem die Einstellung `extensions.dnr.feedback` auf `true` gesetzt wurde. Diese Einstellung kann mit `about:config` oder dem [`--pref`-Flag des `web-ext` CLI-Tools](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#pref) gesetzt werden.

## Vergleich mit der webRequest API

- Die declarativeNetRequest API evaluiert Netzwerk-Anfragen direkt im Browser. Dies macht sie leistungsfähiger als die webRequest API, bei der jede Netzwerk-Anfrage in JavaScript im Erweiterungsprozess bewertet wird.
- Da die Anfragen nicht durch den Erweiterungsprozess abgefangen werden, entfällt bei der deklarativen Netzwerk-Anfrage die Notwendigkeit für Erweiterungen, eine Hintergrundseite zu haben.
- Im Gegensatz zur webRequest API erfordert das Blockieren oder Upgraden von Anfragen mit der declarativeNetRequest API keine Host-Berechtigungen, wenn sie mit der `declarativeNetRequest`-Berechtigung verwendet wird.
- Die declarativeNetRequest API bietet den Nutzern besseren Datenschutz, da Erweiterungen die im Namen des Nutzers gestellten Netzwerk-Anfragen nicht lesen.
- (Nur Chrome:) Im Gegensatz zur webRequest API werden alle Bilder oder iframes, die mit der declarativeNetRequest API blockiert werden, automatisch im DOM zusammengeklappt.
- Bei der Entscheidung, ob eine Anfrage blockiert oder umgeleitet werden soll, wird der declarativeNetRequest API Vorrang vor der webRequest API eingeräumt, da sie eine synchrone Abfangmöglichkeit bietet. Ebenso sind alle Header, die über die declarativeNetRequest API entfernt werden, für Webanfrage-Erweiterungen nicht sichtbar.
- Die webRequest API ist flexibler als die declarativeNetRequest API, da sie es Erweiterungen ermöglicht, eine Anfrage programmgesteuert zu evaluieren.

## Typen

- {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}
  - : Details einer abgeglichenen Regel.
- {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}
  - : Die Anforderungs- oder Antwortheader, die für die Anfrage zu ändern sind.
- {{WebExtAPIRef("declarativeNetRequest.Redirect")}}
  - : Details, wie die Umleitung durchgeführt werden sollte. Nur gültig für Umleitungsregeln.
- {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}
  - : Der Ressourcentyp einer Anfrage.
- {{WebExtAPIRef("declarativeNetRequest.Rule")}}
  - : Ein Objekt mit Details zu einer Regel.
- {{WebExtAPIRef("declarativeNetRequest.RuleAction")}}
  - : Ein Objekt, das die Aktion definiert, die ergriffen werden soll, wenn eine Regel übereinstimmt.
- {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}
  - : Ein Objekt, das die Bedingung definiert, unter der eine Regel ausgelöst wird.
- {{WebExtAPIRef("declarativeNetRequest.URLTransform")}}
  - : Ein Objekt mit Details zu einer URL-Transformation, die für eine Umleitungsaktion durchgeführt werden soll.

## Eigenschaften

- {{WebExtAPIRef("declarativeNetRequest.DYNAMIC_RULESET_ID")}}
  - : Regelset-ID für die von der Erweiterung hinzugefügten dynamischen Regeln.
- {{WebExtAPIRef("declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL")}}
  - : Der Zeitinterval, innerhalb dessen {{WebExtAPIRef("declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL")}} {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}}-Aufrufe gemacht werden können.
- {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES")}}
  - : Die minimale Anzahl an statischen Regeln, die einer Erweiterung über ihre aktivierten statischen Regelsets garantiert werden.
- {{WebExtAPIRef("declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL")}}
  - : Die Anzahl der Male, die {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}} innerhalb eines Zeitraums von {{WebExtAPIRef("declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL")}} aufgerufen werden kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES")}}
  - : Die maximale Anzahl an statischen Regeln, die in jedem statischen Regelset deaktiviert werden können.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}} {{deprecated_inline}}
  - : Die maximale Anzahl an dynamischen und sitzungsumfassenden Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES")}}
  - : Die maximale Anzahl an dynamischen Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS")}}
  - : Die maximale Anzahl an statischen Regelsets, die eine Erweiterung aktivieren kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_REGEX_RULES")}}
  - : Die maximale Anzahl an regulären Ausdrucksregeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES")}}
  - : Die maximale Anzahl an sitzungsumfassenden Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS")}}
  - : Die maximale Anzahl an statischen Regelsets, die eine Erweiterung als Teil des [`declarative_net_request.rule_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request)-Manifestschlüssels spezifizieren kann.
- {{WebExtAPIRef("declarativeNetRequest.SESSION_RULESET_ID")}}
  - : Die Regelset-ID für die von der Erweiterung hinzugefügten sitzungsumfassenden Regeln.

## Funktionen

- {{WebExtAPIRef("declarativeNetRequest.getAvailableStaticRuleCount()")}}
  - : Gibt die Anzahl der statischen Regeln zurück, die eine Erweiterung aktivieren kann, bevor das globale statische Regel-Limit erreicht ist.
- {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds()")}}
  - : Gibt die IDs der deaktivierten Regeln in einem statischen Regelset zurück.
- {{WebExtAPIRef("declarativeNetRequest.getDynamicRules()")}}
  - : Gibt die Menge der dynamischen Regeln für die Erweiterung zurück.
- {{WebExtAPIRef("declarativeNetRequest.getEnabledRulesets()")}}
  - : Gibt die IDs für die Menge der aktivierten statischen Regelsets zurück.
- {{WebExtAPIRef("declarativeNetRequest.getMatchedRules()")}}
  - : Gibt alle für die Erweiterung abgeglichenen Regeln zurück.
- {{WebExtAPIRef("declarativeNetRequest.getSessionRules()")}}
  - : Gibt die Menge der sitzungsumfassenden Regeln für die Erweiterung zurück.
- {{WebExtAPIRef("declarativeNetRequest.isRegexSupported()")}}
  - : Überprüft, ob ein regulärer Ausdruck als {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}`.regexFilter`-Regelbedingung unterstützt wird.
- {{WebExtAPIRef("declarativeNetRequest.setExtensionActionOptions()")}}
  - : Konfiguriert, wie die Aktionsanzahl für Tabs gehandhabt wird.
- {{WebExtAPIRef("declarativeNetRequest.testMatchOutcome()")}}
  - : Überprüft, ob eine der `declarativeNetRequest`-Regeln der Erweiterung eine hypothetische Anfrage übereinstimmen würde.
- {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules()")}}
  - : Modifiziert die aktive Menge an dynamischen Regeln für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets()")}}
  - : Aktualisiert die Menge der aktiven statischen Regelsets für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateSessionRules()")}}
  - : Modifiziert die Menge der sitzungsumfassenden Regeln für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateStaticRules()")}}
  - : Modifiziert den aktivierten Zustand von Regeln in einem statischen Regelset.

## Ereignisse

- {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug")}}
  - : Wird ausgelöst, wenn eine Regel mit einer Anfrage übereinstimmt, wenn eine Erweiterung mit der Berechtigung "declarativeNetRequestFeedback" debuggt wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

<!--
// Urheberrecht 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Verbreitung und Nutzung der Quellen und binären Formen, mit oder ohne
// Änderung, sind unter den folgenden Bedingungen gestattet:
//
//    * Verbreitungen des Quellcodes müssen den obigen Urheberrechtsvermerk
// und diese Liste von Bedingungen sowie den folgenden Haftungsausschluss erhalten.
//    * Verbreitung in binärer Form müssen den obigen
// Urheberrechtsvermerk und diese Liste von Bedingungen sowie den
// folgenden Haftungsausschluss in der Dokumentation und/oder anderen Materialien
// erhalten, die mit der Verteilung geliefert werden.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die sich aus
// dieser Software ableiten, zu unterstützen oder zu fördern, ohne
// vorherige schriftliche Erlaubnis.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHEN ODER
// KONKLUDENTEN GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF DIE
// KONKLUDENTEN GARANTIEN DER MARKTGÄNGIGKEIT UND DER EIGNUNG FÜR EINEN
// BESTIMMTEN ZWECK WERDEN AUSGESCHLOSSEN. DIE URHEBERRECHTSINHABER ODER MITWIRKENDEN
// HAFTEN IN KEINEM FALL FÜR DIREKTE, INDIREKTE, ZUFÄLLIGE,
// SPEZIELLE, BEISPIELHAFTE ODER FOLGESCHÄDEN (EINSCHLIEßLICH, ABER
// NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZWAREN ODER
// DIENSTLEISTUNGEN; NUTZUNGSVERLUST, DATENVERLUST ODER GEWINNVERLUST;
// ODER GESCHÄFTSUNTERBRECHUNG) WIE AUCH IMMER ENTSTANDEN UND
// AUF JEDER THEORIE DER HAFTUNG BASIEREND, UNABHÄNGIG DAVON, OB IN VERTRAG,
// STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH
// FAHRLÄSSIGKEIT ODER ANDERWEITIG) IM ZUSAMMENHANG MIT DER VERWENDUNG
// DIESER SOFTWARE, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN
// HINGEWIESEN WURDE.
-->
