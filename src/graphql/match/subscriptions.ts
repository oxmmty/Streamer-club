import { gql } from "@apollo/client";

const SUB_MATCHES = gql`
  subscription MySubscription($where: matches_bool_exp = {}) {
    matches(where: $where, order_by: {start_datetime: asc}) {
      away_club_id
      away_club_name
      away_team_id
      away_team_name
      club_id
      created_at
      home_team_id
      home_team_name
      id
      is_historic
      league_id
      league_name
      name
      round
      round_name
      start_datetime
      status
      stream_id
      stream_key
      updated_at
      url
      video_asset_id
      ext_managed
      ext_scoring
      away_team {
        id
        image
        name
        division
        club {
          logo
          name
          display_name
        }
      }
      home_team {
        id
        image
        name
        division
        club {
          logo
          name
          display_name
        }
      }
      league {
        logo
        name
      }
    }
  }`;

const SUB_FILTER_MATCHES = gql`
  subscription SUB_FILTER_MATCHES(
    $limit: Int = 7
    $where: matches_bool_exp = {}
  ) {
    matches(limit: $limit, order_by: { start_datetime: asc }, where: $where) {
      away_club_id
      away_club_name
      away_team_id
      away_team_name
      club_id
      created_at
      home_team_id
      home_team_name
      id
      is_historic
      league_id
      league_name
      name
      round
      round_name
      start_datetime
      thumbnail_url
      status
      stream_id
      stream_key
      updated_at
      url
      video_asset_id
      ext_managed
      ext_scoring
      away_team {
        id
        image
        name
        division
        club {
          logo
          name
          display_name
        }
      }
      home_team {
        id
        image
        name
        division
        club {
          logo
          name
          display_name
        }
      }
      league {
        logo
        name
      }
    }
  }
`;

// // ---------
export default {
  SUB_MATCHES,
  SUB_FILTER_MATCHES,
};
