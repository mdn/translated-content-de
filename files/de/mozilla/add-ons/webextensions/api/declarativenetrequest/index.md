---
title: declarativeNetRequest
slug: Mozilla/Add-ons/WebExtensions/API/declarativeNetRequest
l10n:
  sourceCommit: 34215030993b429f727a2c73ef06eb029f57beeb
---

{{AddonSidebar}}

Diese API ermöglicht es Erweiterungen, Bedingungen und Aktionen festzulegen, die beschreiben, wie Netzwerkanforderungen gehandhabt werden sollen. Diese deklarativen Regeln ermöglichen es dem Browser, Netzwerkanforderungen zu bewerten und zu ändern, ohne die Erweiterungen über einzelne Netzwerkanforderungen zu benachrichtigen.

## Berechtigungen

Um diese API zu verwenden, muss eine Erweiterung die Berechtigung `"declarativeNetRequest"` oder `"declarativeNetRequestWithHostAccess"` im [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei anfordern.

Die Berechtigung `"declarativeNetRequest"` erlaubt es Erweiterungen, Anforderungen zu blockieren und zu aktualisieren, ohne Hostberechtigungen zu benötigen. Hostberechtigungen sind erforderlich, wenn die Erweiterung Anforderungen umleiten oder Header von Anforderungen ändern möchte oder wenn die Berechtigung `"declarativeNetRequestWithHostAccess"` anstelle von `"declarativeNetRequest"` verwendet wird. Um in diesen Fällen auf Anforderungen zu reagieren, sind Hostberechtigungen für die Anforderungs-URL erforderlich. Für alle Anforderungen, außer für Navigationsanforderungen (d.h. Ressourcentyp `main_frame` und `sub_frame`), sind auch Hostberechtigungen für den Initiator der Anforderung erforderlich. Der Initiator einer Anforderung ist normalerweise das Dokument oder der Worker, der die Anforderung ausgelöst hat.

Einige Anforderungen sind eingeschränkt und können von Erweiterungen nicht übereinstimmen. Dazu gehören privilegierte Browseranfragen, Anfragen an oder von [eingeschränkten Domains](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#restricted_domains) und Anfragen von anderen Erweiterungen.

Die Berechtigung `"declarativeNetRequestFeedback"` ist erforderlich, um {{WebExtAPIRef("declarativeNetRequest.getMatchedRules","getMatchedRules")}} und {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug","onRuleMatchedDebug")}} zu verwenden, da sie Informationen zu übereinstimmenden deklarativen Regeln zurückgeben. Siehe [Testen](#testen) für weitere Informationen.

## Regeln

Die deklarativen Regeln werden durch vier Felder definiert:

- `id` – Eine ID, die eine Regel innerhalb eines Regelsatzes eindeutig identifiziert. Erforderlich und sollte >= 1 sein.
- `priority` – Die Regelpriorität. Wenn angegeben, sollte sie >= 1 sein. Standardmäßig 1. Siehe [Übereinstimmende Präzedenzfälle](#übereinstimmende_präzedenzfälle) für Details, wie die Priorität beeinflusst, welche Regeln angewendet werden.
- `condition` – Die {{WebExtAPIRef("declarativeNetRequest.RuleCondition","condition")}}, unter der diese Regel ausgelöst wird.
- `action` – Die {{WebExtAPIRef("declarativeNetRequest.RuleAction","action")}}, die ausgeführt werden soll, wenn die Regel zutrifft. Regeln können eine der folgenden Aktionen ausführen:
  - eine Netzwerkanforderung blockieren.
  - eine Netzwerkanforderung umleiten.
  - Header von einer Netzwerkanforderung ändern.
  - verhindern, dass eine andere Übereinstimmungsregel angewendet wird.

> [!NOTE]
> Eine Umleitungsaktion leitet die Anfrage nicht um, und die Anfrage wird wie gewohnt fortgesetzt, wenn:
>
> - die Aktion die Anfrage nicht ändert.
> - die Umleitungs-URL ungültig ist (z.B. der Wert von {{WebExtAPIRef("declarativeNetRequest.redirect","redirect.regexSubstitution")}} ist keine gültige URL).

Dies ist ein Beispiel für eine Regel, die alle Skriptanforderungen von `"foo.com"` an jede URL mit `"abc"` als Teilzeichenkette blockiert:

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

Das `urlFilter`-Feld einer Regelbedingung wird verwendet, um das Muster anzugeben, das gegen die Anforderungs-URL abgeglichen wird. Siehe {{WebExtAPIRef("declarativeNetRequest.RuleCondition","RuleCondition")}} für Details. Einige Beispiele für URL-Filter sind:

<table>
<tbody>
<tr>
<th><code>urlFilter</code></th>
<th>Übereinstimmungen</th>
<th>Keine Übereinstimmung</th>
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

## Regelsätze

Regeln sind in Regelsätzen organisiert:

- **statische Regelsätze**: Sammlungen von Regeln, die mit dem Manifest-Schlüssel [`"declarative_net_request"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) definiert und in der Erweiterung gespeichert sind. Eine Erweiterung kann statische Regelsätze mit {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets","updateEnabledRulesets")}} aktivieren und deaktivieren. Die Menge der aktivierten statischen Regelsätze wird zwischen Sitzungen, aber nicht zwischen Erweiterungsaktualisierungen beibehalten. Die aktivierten statischen Regelsätze bei der Erweiterungsinstallation und -aktualisierung werden durch den Inhalt des Manifestschlüssels `"declarative_net_request"` bestimmt.
- **dynamischer Regelsatz**: Regeln, die mit {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules","updateDynamicRules")}} hinzugefügt oder entfernt werden. Diese Regeln bleiben sowohl zwischen Sitzungen als auch bei Erweiterungsaktualisierungen bestehen.
- **Sitzungsregelsatz**: Regeln, die mit {{WebExtAPIRef("declarativeNetRequest.updateSessionRules","updateSessionRules")}} hinzugefügt oder entfernt werden. Diese Regeln bleiben nicht über Browsersitzungen hinweg bestehen.

> [!NOTE]
> Fehler und Warnungen zu ungültigen statischen Regeln werden nur während des [Testens](#testen) angezeigt. Ungültige statische Regeln in dauerhaft installierten Erweiterungen werden ignoriert. Daher ist es wichtig, zu überprüfen, ob Ihre statischen Regelsätze gültig sind, indem Sie Tests durchführen.

## Einschränkungen

### Begrenzungen für statische Regelsätze

Eine Erweiterung kann:

- Statische Regelsätze im Manifest-Schlüssel [`"declarative_net_request"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) bis zu dem Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS","MAX_NUMBER_OF_STATIC_RULESETS")}} angeben.
- Statische Regelsätze aktivieren (im `"declarative_net_request"` Manifest-Schlüssel oder programmgesteuert), sodass die Anzahl der (aktivierten oder deaktivierten) Regeln, die sie enthalten, den Wert von {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES","GUARANTEED_MINIMUM_STATIC_RULES")}} nicht überschreitet und die Anzahl der aktivierten statischen Regelsätze den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS","MAX_NUMBER_OF_ENABLED_STATIC_RULESETS")}} nicht überschreitet.
  > [!NOTE]
  > Die Anzahl der Regeln in aktivierten statischen Regelsätzen für alle Erweiterungen darf das globale Limit nicht überschreiten. Erweiterungen sollten nicht darauf setzen, dass das globale Limit einen bestimmten Wert hat; stattdessen sollten sie {{WebExtAPIRef("declarativeNetRequest.getAvailableStaticRuleCount","getAvailableStaticRuleCount")}} verwenden, um die Anzahl zusätzlicher Regeln zu ermitteln, die sie aktivieren können.
- Regeln in statischen Regelsätzen bis zum Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES","MAX_NUMBER_OF_DISABLED_STATIC_RULES")}} deaktivieren. Diese deaktivierten Regeln zählen jedoch zu den {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES","GUARANTEED_MINIMUM_STATIC_RULES")}}.

### Dynamische und sitzungsbezogene Regeln

Die Anzahl der dynamischen und sitzungsbezogenen Regeln, die eine Erweiterung hinzufügen kann, ist begrenzt auf:

- In Safari und bis Chrome 119 sowie Firefox 127, den Wert von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES","MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}}.
- Ab Chrome 120 und Firefox 128, die Werte von {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES","MAX_NUMBER_OF_DYNAMIC_RULES")}} und {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES","MAX_NUMBER_OF_SESSION_RULES")}}

## Übereinstimmende Präzedenzfälle

Wenn der Browser bewertet, wie Anfragen behandelt werden sollen, überprüft er die Regeln jeder Erweiterung, die eine Bedingung haben, die mit der Anfrage übereinstimmt und wählt diejenige aus, die in Erwägung gezogen wird wie folgt:

1. die Regelpriorität, wobei 1 die niedrigste Priorität ist (und Regeln standardmäßig auf 1 gesetzt sind, wenn keine Priorität festgelegt ist).<br>
   Wenn dies nicht zu einer Regel führt, die angewendet werden soll:
2. die Regelaktion, in der folgenden Reihenfolge der Priorität:
   1. "allow", was bedeutet, dass alle anderen verbleibenden Regeln ignoriert werden.
   2. "allowAllRequests" (nur für main_frame und sub_frame resourceTypes) hat die gleiche Wirkung wie "allow", gilt jedoch auch für zukünftige Unterressourcen in dem Dokument (einschließlich Nachkomme-Frames), die aus der Anfrage generiert werden.
   3. "block" storniert die Anfrage.
   4. "upgradeScheme" aktualisiert das Schema der Anfrage.
   5. "redirect" leitet die Anfrage um.
   6. "modifyHeaders" schreibt Anforderungs- oder Antwortheader oder beides um.

> [!NOTE]
> Wenn mehrere passende Regeln die gleiche Regelpriorität und Regelaktionstyp haben, kann das Ergebnis unklar sein, wenn die übereinstimmende Aktion zusätzliche Eigenschaften unterstützt. Diese Eigenschaften können zu Ergebnissen führen, die nicht kombiniert werden können. Zum Beispiel:
>
> - Die "block"-Aktion unterstützt keine zusätzlichen Eigenschaften und es gibt daher keine Mehrdeutigkeit: Alle übereinstimmenden "block"-Aktionen würden zum gleichen Ergebnis führen.
> - Die "redirect"-Aktion leitet eine Anfrage zu einem Ziel um. Wenn mehrere "redirect"-Aktionen übereinstimmen, wird jede bis auf eine "redirect"-Aktion ignoriert. Es ist weiterhin möglich, wiederholt umzuleiten, wenn die umgeleitete Anfrage einer anderen Regelbedingung entspricht.
> - Mehrere "modifyHeaders"-Aktionen können unabhängig angewendet werden, wenn sie verschiedene Header bearbeiten. Das Ergebnis ist unklar, wenn sie denselben Header betreffen, da einige Kombinationen von Operationen nicht erlaubt sind (wie in {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}} erklärt). Die Reihenfolge der Auswertung der "modifyHeaders"-Aktionen ist daher wichtig.
>
> Um die Reihenfolge zu kontrollieren, in der Aktionen angewendet werden, weisen Sie Regeln, deren Rangfolge wichtig ist, unterschiedliche `priority`-Werte zu.

> [!NOTE]
> Nach Regelpriorität und Regelaktion berücksichtigt Firefox den Regelsatz, zu dem die Regel gehört, in dieser Reihenfolge der Priorität: Sitzungsregeln > dynamische > statische Regelsätze.
> Darauf kann nicht browserspezifisch vertraut werden, siehe [WECG issue 280](https://github.com/w3c/webextensions/issues/280).

Wenn nur eine Erweiterung eine Regel für die Anfrage bereitstellt, wird diese Regel angewendet. Wenn jedoch mehr als eine Erweiterung eine übereinstimmende Regel hat, wählt der Browser diejenige aus, die in dieser Reihenfolge der Priorität angewendet werden soll:

1. "block"
2. "redirect" und "upgradeScheme"
3. "allow" und "allowAllRequests"

Wenn die Anfrage nicht blockiert oder umgeleitet wurde, werden die passenden `modifyHeaders`-Aktionen angewendet, wie in {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}} dokumentiert.

## Testen

{{WebExtAPIRef("declarativeNetRequest.testMatchOutcome","testMatchOutcome")}}, {{WebExtAPIRef("declarativeNetRequest.getMatchedRules","getMatchedRules")}}, und {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug","onRuleMatchedDebug")}} stehen zur Verfügung, um beim Testen von Regeln und Regelsätzen zu helfen. Diese APIs erfordern die `"declarativeNetRequestFeedback"` [Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions). Zudem:

- in Chrome sind diese APIs nur für nicht gepackte Erweiterungen verfügbar.
- in Firefox sind diese APIs nur verfügbar, nachdem die `extensions.dnr.feedback`-Präferenz auf `true` gesetzt wurde. Setzen Sie diese Präferenz mit `about:config` oder dem [`--pref`-Befehl des `web-ext` CLI-Tools](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#pref).

## Vergleich mit der webRequest API

- Die declarativeNetRequest API bewertet Netzwerkanforderungen direkt im Browser. Dadurch ist sie leistungsstärker als die webRequest API, bei der jede Netzwerkanforderung in JavaScript im Erweiterungsprozess bewertet wird.
- Da die Anfragen nicht vom Erweiterungsprozess abgefangen werden, entfällt bei der declarativeNetRequest API die Notwendigkeit für Erweiterungen, eine Hintergrundseite zu haben.
- Im Gegensatz zur webRequest API erfordert das Blockieren oder Aktualisieren von Anfragen mit der declarativeNetRequest API keine Hostberechtigungen, wenn die Berechtigung `declarativeNetRequest` verwendet wird.
- Die declarativeNetRequest API bietet den Nutzern besseren Datenschutz, da Erweiterungen die im Namen des Nutzers gestellten Netzwerkanforderungen nicht lesen.
- (Nur Chrome:) Im Gegensatz zur webRequest API werden alle Bilder oder iframes, die mit der declarativeNetRequest API blockiert werden, automatisch im DOM zusammengeklappt.
- Bei der Entscheidung, ob eine Anfrage blockiert oder umgeleitet werden soll, hat die declarativeNetRequest API Vorrang vor der webRequest API, da sie eine synchrone Abfangmöglichkeit bietet. Ebenso werden alle Header, die durch die declarativeNetRequest API entfernt werden, Anfragen von Web-Erweiterungen nicht sichtbar gemacht.
- Die webRequest API ist flexibler als die declarativeNetRequest API, da sie es Erweiterungen ermöglicht, eine Anfrage programmatisch zu bewerten.

## Typen

- {{WebExtAPIRef("declarativeNetRequest.MatchedRule")}}
  - : Details einer übereinstimmenden Regel.
- {{WebExtAPIRef("declarativeNetRequest.ModifyHeaderInfo")}}
  - : Die Anforderungs- oder Antwortheader, die für die Anfrage geändert werden sollen.
- {{WebExtAPIRef("declarativeNetRequest.Redirect")}}
  - : Details dazu, wie die Umleitung durchgeführt werden soll. Nur für Umleitungsregeln gültig.
- {{WebExtAPIRef("declarativeNetRequest.ResourceType")}}
  - : Der Ressourcentyp einer Anfrage.
- {{WebExtAPIRef("declarativeNetRequest.Rule")}}
  - : Ein Objekt, das Details zu einer Regel enthält.
- {{WebExtAPIRef("declarativeNetRequest.RuleAction")}}
  - : Ein Objekt, das die Aktion definiert, die ausgeführt werden soll, wenn eine Regel zutrifft.
- {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}
  - : Ein Objekt, das die Bedingung definiert, unter der eine Regel ausgelöst wird.
- {{WebExtAPIRef("declarativeNetRequest.URLTransform")}}
  - : Ein Objekt, das Details zu einer URL-Transformation enthält, die für eine Umleitungsaktion ausgeführt werden soll.

## Eigenschaften

- {{WebExtAPIRef("declarativeNetRequest.DYNAMIC_RULESET_ID")}}
  - : Regelsatz-ID für die von der Erweiterung hinzugefügten dynamischen Regeln.
- {{WebExtAPIRef("declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL")}}
  - : Das Zeitintervall, innerhalb dessen {{WebExtAPIRef("declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL")}} {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}}-Anrufe gemacht werden können.
- {{WebExtAPIRef("declarativeNetRequest.GUARANTEED_MINIMUM_STATIC_RULES")}}
  - : Die Mindestanzahl statischer Regeln, die einer Erweiterung über ihre aktivierten statischen Regelsätze garantiert werden.
- {{WebExtAPIRef("declarativeNetRequest.MAX_GETMATCHEDRULES_CALLS_PER_INTERVAL")}}
  - : Die Anzahl der Male, die {{WebExtAPIRef("declarativeNetRequest.getMatchedRules")}} innerhalb eines Zeitraums von {{WebExtAPIRef("declarativeNetRequest.GETMATCHEDRULES_QUOTA_INTERVAL")}} aufgerufen werden kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DISABLED_STATIC_RULES")}}
  - : Die maximale Anzahl an statischen Regeln, die in jedem statischen Regelsatz deaktiviert werden können.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES")}} {{deprecated_inline}}
  - : Die maximale Anzahl an dynamischen und sitzungsbezogenen Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_DYNAMIC_RULES")}}
  - : Die maximale Anzahl an dynamischen Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_ENABLED_STATIC_RULESETS")}}
  - : Die maximale Anzahl an statischen Regelsätzen, die eine Erweiterung aktivieren kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_REGEX_RULES")}}
  - : Die maximale Anzahl an regulären Ausdrucks-Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_SESSION_RULES")}}
  - : Die maximale Anzahl an sitzungsbezogenen Regeln, die eine Erweiterung hinzufügen kann.
- {{WebExtAPIRef("declarativeNetRequest.MAX_NUMBER_OF_STATIC_RULESETS")}}
  - : Die maximale Anzahl an statischen Regelsätzen, die durch den Manifest-Schlüssel [`declarative_net_request.rule_resources`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/declarative_net_request) von einer Erweiterung angegeben werden können.
- {{WebExtAPIRef("declarativeNetRequest.SESSION_RULESET_ID")}}
  - : Die Regelsatz-ID für die sitzungsbezogenen Regeln, die von der Erweiterung hinzugefügt werden.

## Funktionen

- {{WebExtAPIRef("declarativeNetRequest.getAvailableStaticRuleCount()")}}
  - : Gibt die Anzahl der statischen Regeln zurück, die eine Erweiterung aktivieren kann, bevor das globale statische Regel-Limit erreicht wird.
- {{WebExtAPIRef("declarativeNetRequest.getDisabledRuleIds()")}}
  - : Gibt die IDs der in einem statischen Regelsatz deaktivierten Regeln zurück.
- {{WebExtAPIRef("declarativeNetRequest.getDynamicRules()")}}
  - : Gibt die Menge der dynamischen Regeln für die Erweiterung zurück.
- {{WebExtAPIRef("declarativeNetRequest.getEnabledRulesets()")}}
  - : Gibt die IDs für die Menge der aktivierten statischen Regelsätze zurück.
- {{WebExtAPIRef("declarativeNetRequest.getMatchedRules()")}}
  - : Gibt alle Regeln zurück, die für die Erweiterung getroffen wurden.
- {{WebExtAPIRef("declarativeNetRequest.getSessionRules()")}}
  - : Gibt die Menge der sitzungsbezogenen Regeln für die Erweiterung zurück.
- {{WebExtAPIRef("declarativeNetRequest.isRegexSupported()")}}
  - : Überprüft, ob ein regulärer Ausdruck als {{WebExtAPIRef("declarativeNetRequest.RuleCondition")}}`.regexFilter` Regelbedingung unterstützt wird.
- {{WebExtAPIRef("declarativeNetRequest.setExtensionActionOptions()")}}
  - : Konfiguriert Optionen zur Verwaltung der Aktionsanzahl für Tabs.
- {{WebExtAPIRef("declarativeNetRequest.testMatchOutcome()")}}
  - : Überprüft, ob eine der `declarativeNetRequest`-Regeln der Erweiterung mit einer hypothetischen Anfrage übereinstimmt.
- {{WebExtAPIRef("declarativeNetRequest.updateDynamicRules()")}}
  - : Ändert die aktive Menge dynamischer Regeln für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateEnabledRulesets()")}}
  - : Aktualisiert die Menge der aktiven statischen Regelsätze für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateSessionRules()")}}
  - : Ändert die Menge der sitzungsbezogenen Regeln für die Erweiterung.
- {{WebExtAPIRef("declarativeNetRequest.updateStaticRules()")}}
  - : Ändert den aktivierten Zustand von Regeln in einem statischen Regelsatz.

## Ereignisse

- {{WebExtAPIRef("declarativeNetRequest.onRuleMatchedDebug")}}
  - : Wird ausgelöst, wenn eine Regel mit einer Anfrage übereinstimmt, wenn eine Erweiterung mit der Berechtigung "declarativeNetRequestFeedback" im Debug-Modus ist.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
